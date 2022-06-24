import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HuaweiAdsManager')
export class HuaweiAdsManager extends Component {
    start() {
        var params = { "adType": "Interstitial", "adID":"testb4znbuh3n2" };
        sdkhub.getAdsPlugin().preloadAds(params);
        sdkhub.getAdsPlugin().showAds(params);

    }

    update(deltaTime: number) {
        
    }
}

