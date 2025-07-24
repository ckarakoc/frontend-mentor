import { QRCodeElementType, QRCodeErrorCorrectionLevel } from 'angularx-qrcode';
import * as i0 from '@angular/core';

declare class Qrcode {
    white: string;
    slate300: string;
    slate500: string;
    slate900: string;
    blue600: string;
    blue500: string;
    qr_model: {
        allowEmptyString: boolean;
        alt: string;
        ariaLabel: string;
        colorDark: string;
        colorLight: string;
        cssClass: string;
        elementType: QRCodeElementType;
        errorCorrectionLevel: QRCodeErrorCorrectionLevel;
        imageSrc: string;
        imageHeight: number;
        imageWidth: number;
        margin: number;
        qrdata: string;
        scale: number;
        version: undefined;
        title: string;
        width: number;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<Qrcode, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Qrcode, "lib-qrcode", never, {}, {}, never, never, true, never>;
}

export { Qrcode };
