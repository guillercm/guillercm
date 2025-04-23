import { Component, OnInit, input, signal } from '@angular/core';
import { Certificate } from '@core/interfaces/config/config.interface';
import { ImgTecnologyPipe } from '@core/pipes/imgTecnology/img-tecnology.pipe';

@Component({
  selector: 'core-certificates',
  imports: [ImgTecnologyPipe],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent implements OnInit {

  public certificates = input.required<Certificate[]>(); 

  private _activeCertificate = signal<Certificate | null>(null);

  // protected readonly activeCertificate = this._activeCertificate.asReadonly();

  ngOnInit(): void {
    this.initialize();
  }

  private initialize() {
    const certificates = this.certificates();
    if (certificates.length) {
      this._activeCertificate.set(certificates[0]);
    }
  }

  protected certificateIsActive(certificate: Certificate) {
    return this._activeCertificate() === certificate;
  }

  protected setActiveCertificate(certificate: Certificate) {
    this._activeCertificate.set(certificate);
  }

}
