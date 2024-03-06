export class ThingsBoard {
    static readonly BASE_URL: string = 'https://uat-obumngt.hyvasmart.com';
    static readonly USERNAME: string = 'smart.automations@hyva.com';
    static readonly PASSWORD: string = 'T3sting2019!!@';
    static AUTH_TOKEN: string;
    // static readonly DEVICE_TOKEN: string = '15b32330-bc15-11ed-b297-3b093c379f61';  // HYVATB01
}

export class OneEMS {
    static readonly BASE_URL: string = 'https://uat-portal.hyvasmart.com'
    static readonly HOME_URL: string = `${OneEMS.BASE_URL}/#/home`;
    static readonly VALID_USERNAME: string = 'testingthesmartapp@gmail.com';
    static readonly VALID_PASSWORD: string = 'Password@123';
    static readonly INVALID_USERNAME: string = 'wronguser@gmail.com';
    static readonly INVALID_PASSWORD: string = 'inc0rr3ctpa55w0rd!';
}
