import { Component, OnInit, input, signal } from '@angular/core';
import { Certificate } from '@core/interfaces/config/config.interface';

@Component({
  selector: 'core-certificates',
  imports: [],
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

  private getActiveIndexCertificate() {
    const certificates = this.certificates();
    const activeCertificate = this._activeCertificate();
    return {
      certificatesLength: certificates.length,
      index: activeCertificate ? certificates.indexOf(activeCertificate) : -1
    } ;
  }

  protected nextActiveCertificate() {
    const {index, certificatesLength } = this.getActiveIndexCertificate();
    this._activeCertificate.set(this.certificates()[index === (certificatesLength -1) ? 0 : index + 1])
  }

  protected prevActiveCertificate() {
    const { index, certificatesLength } = this.getActiveIndexCertificate();
    this._activeCertificate.set(
      this.certificates()[index === 0 ? certificatesLength - 1 : index - 1]
    );
  }
  

}
