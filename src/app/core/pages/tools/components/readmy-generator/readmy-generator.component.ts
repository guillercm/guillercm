import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PersonalData, Skill } from '@core/interfaces/config/config.interface';
import { AppConfigService } from '@core/services/config/app-config.service';

@Component({
  selector: 'core-readmy-generator',
  imports: [],
  templateUrl: './readmy-generator.component.html',
  styleUrl: './readmy-generator.component.css'
})
export class ReadmyGeneratorComponent implements OnInit {

  private readonly _domSanitizer = inject(DomSanitizer);

  private readonly _appConfigService = inject(AppConfigService);

  protected readonly filename = "README.md";

  private _downloadLink = signal<SafeUrl|null>(null);

  protected readonly downloadLink = this._downloadLink.asReadonly();

  protected readonly config = computed(() => this._appConfigService.config() )

  ngOnInit(): void {
    this.initialize();
  }

  private initialize() {
    this.generateReadmy();
  }

  private generateReadmy() {
    const fileContent = this.generateReadmeContent();
    const blob = new Blob([fileContent], { type: 'text/markdown;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    this._downloadLink.set(this._domSanitizer.bypassSecurityTrustUrl(url));
  }

  private generateReadmeContent() {
    const config = this._appConfigService.config();
    if (!config) return '';
    const getImgTecnology = (nameTecnology: string) => `public/static/img/tecnologies/${nameTecnology.toLowerCase()}.png`;
    const fullName = `${config.personalData.name} ${config.personalData.surnames.first} ${config.personalData.surnames.second}`
    let content = `
<div align="center">

<h1 align="left">Hola 👋, soy <a href="${config.personalData.nickname}">
<span>
    <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=32&duration=2500&pause=500&width=435&lines=${fullName};${config.personalData.position.replace(" ", "+")}" alt="${fullName}" title="${fullName}"
  style="margin-bottom: -26.5px;background: transparent;max-width: 100%;margin-left: 5px;" />
  </span>
  </a>

</h1>

</div>
<a href="${config.personalData.portfolio}" target="_blank">
    <img src="public/static/img/readmy/background.png" title="${config.personalData.name} (${config.personalData.position})" alt="${config.personalData.name} (${config.personalData.position})">
</a>
<p align="left">

<a href="${config.personalData.socialNetworks.linkedIn}" target="blank">
    <img align="center"
        src="public/static/img/readmy/linkedin.png"
        alt="linkedIn" height="40" width="40" />
</a>
</p>
<br>

## Sobre mi

<!-- - 🌱 Actualmente estoy aprendiendo **java** -->
- 👨‍💻 Todos mis proyectos están disponibles en [${config.personalData.portfolio}](${config.personalData.portfolio})
- 📫 Puedes contactarme con **${config.personalData.email}**
<br>

## Tecnologías

<img src="https://github-readme-stats.vercel.app/api/top-langs?username=${config.personalData.name}&show_icons=true&locale=es&layout=compact&line_height=20&title_color=7A7ADB&icon_color=2234AE&text_color=D3D3D3&bg_color=0,000000,130F40" width="375" alt="${config.personalData.name}" title="${config.personalData.name}"/>

<p align="left">
    ${(() => {
        let html = '';
        config.skills.forEach((skill: Skill) => {
          html += `\n### ${skill.name}\n`
          skill.technologies.forEach((technology: string) => {
            html += `<img src="${getImgTecnology(technology)}" alt="${technology}" width="40" height="40"/>`
          })
          html += '\n'
        })
        return html;
    })()}
</p>

<br>

## Mis proyectos
${(() => {
        let htmlProjects = '';
        for (let i = 0; i < config.projects.length; i+=2) {
            let projects = [config.projects[i], config.projects[i + 1]];
            let j = 0;
            for (const project of projects) {
                j++;
                if (!project) continue;
                htmlProjects += `${(j === 1 ? '<table><tr>' : '')}<td width="50%">
                    <h3 align="center">${project.name}</h3>
                    <div align="center">
                        <img src="public/static/img/projects/${project.image}" width="300" alt="${project.name}" title="${project.name}">
                        <p align="left">${project.description}</p>
                            ${(() => {
                                let html = '';
                                project.technologies.forEach((technology: string) => {
                                  html += `<img src="${getImgTecnology(technology)}" alt="${technology}" width="30" height="30" />&nbsp;`
                                })
                                if (project.actions.gitHub) {
                                  html += `<p>
                          <a href="${project.actions.gitHub}" target="_blank">
                              <img src="https://img.shields.io/badge/GITHUB-white?style=for-the-badge&logo=github&logoColor=black">
                          </a>
                        </p>`;
                                }
                                if (project.actions.npm) {
                                    html += `<p>
                          <a href="${project.actions.npm}" target="_blank">
                              <img src="https://img.shields.io/badge/NPM-red?style=for-the-badge&logo=npm&logoColor=white">
                          </a>
                        </p>`;
                                  }
                                return html;
                            })()}
                    </div>
                </td> ${(j === 2 ? '</tr></table>' : '')}`;
                if (j === 2) {
                    j = 0;
                }
            }
        }
        return '<table><tr>' + htmlProjects + '';
    })()}

<br>
<!--
### ⚙️ &nbsp;GitHub Analytics

<p align="center">
<a href="https://github.com/guillercm/">
  <img height="180em" src="https://github-readme-stats-eight-theta.vercel.app/api?username=${config.personalData.name}&show_icons=true&theme=algolia&include_all_commits=true&count_private=true"/>
  <img height="180em" src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${config.personalData.name}&layout=compact&langs_count=8&theme=algolia"/>
</a>
</p>
-->
`;
    return content;
  }
}
