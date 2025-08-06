import { Component } from '@angular/core';
import { QRCodeComponent, QRCodeElementType, QRCodeErrorCorrectionLevel } from 'angularx-qrcode';

@Component({
  selector: 'lib-qrcode',
  imports: [
    QRCodeComponent
  ],
  templateUrl: './qrcode.html',
  styleUrl: './qrcode.css'
})
export class Qrcode {
  white = '#ffffff';
  slate300 = '#d5e1ef';
  slate500 = '#68778d';
  slate900 = '#1f314f';
  blue600 = '#2c7dfa';
  blue500 = '#3685ff';


  public qr_model = {
    allowEmptyString: true,
    alt: 'ckarakoc.nl',
    ariaLabel: `My personal website`,
    colorDark: this.white,
    colorLight: this.blue600,
    cssClass: 'center',
    elementType: 'canvas' as QRCodeElementType,
    errorCorrectionLevel: 'M' as QRCodeErrorCorrectionLevel,
    imageSrc: 'assets/qrcode/logo.png',
    imageHeight: 0,
    imageWidth: 0,
    margin: 9,
    qrdata: 'https://www.ckarakoc.nl',
    scale: 0,
    version: undefined,
    title: 'My personal website',
    width: 288
  };

}
