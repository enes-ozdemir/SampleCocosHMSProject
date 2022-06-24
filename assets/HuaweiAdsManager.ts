import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HuaweiAdsManager')
export class HuaweiAdsManager extends Component {
    start() {
        this.invokeBannerAds();

    }

    update(deltaTime: number) {
        
    }

    invokeBannerAds()
{
             var params = { "adType": "Banner", "adId": "testw6vs28auh3", "pos": "0", "adSize": "BANNER_SIZE_320_50" };
         sdkhub.getAdsPlugin().showAds(params);                   
 }
}

