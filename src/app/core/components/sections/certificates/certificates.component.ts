import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { Certificate } from '@core/interfaces/config/config.interface';

@Component({
  selector: 'core-certificates',
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {

  public certificates = input.required<Certificate[]>(); 

  private _activeIndexCertificate = signal<number>(0);

  private _activeCertificate = computed<Certificate>(() => 
    this.certificates()[this._activeIndexCertificate()]
  )

  protected certificateIsActive(certificate: Certificate) {
    return this._activeCertificate() === certificate;
  }

  protected setActiveCertificate(index: number) {
    this._activeIndexCertificate.set(index);
  }

  protected nextActiveCertificate() {
    this._activeIndexCertificate.update(() => {
      return this.getIndexNextCertificate();
    })
  }

  protected prevActiveCertificate() {
    this._activeIndexCertificate.update(() => {
      return this.getIndexPrevCertificate();;
    })
  }

  protected getIndexNextCertificate() {
    if (this.certificates().length - 1 === this._activeIndexCertificate()) return 0;
    return this._activeIndexCertificate() + 1;
  }

  protected getIndexPrevCertificate() {
    if (this._activeIndexCertificate() === 0) return this.certificates().length - 1;
    return this._activeIndexCertificate() - 1;
  }

  protected classesByCertificateIndex(index: number) {
    const activeIndexCertificate = this._activeIndexCertificate();
    if (index === activeIndexCertificate) return 'transform translate-x-0';
    if (index === this.getIndexPrevCertificate()) return '-translate-x-full';
    if (index === this.getIndexNextCertificate()) return 'translate-x-full';
    return ' translate-x-0 hidden';
  }
  

}
