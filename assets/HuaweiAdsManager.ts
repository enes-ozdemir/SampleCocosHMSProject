import {_decorator, Component, Node} from 'cc';

const {ccclass, property} = _decorator;

@ccclass('HuaweiAdsManager')
export class HuaweiAdsManager extends Component {
    start() {
        this.invokeBannerAds();

    }

    update(deltaTime: number) {

    }

    invokeBannerAds() {
        var params = {"adType": "Banner", "adId": "testw6vs28auh3", "pos": "0", "adSize": "BANNER_SIZE_320_50"};
        sdkhub.getAdsPlugin().showAds(params);
    }


    invokepreloadrewardAds() {
        var params = {"adType": "Reward", "adId": "testx9dtjwj8hp"};
        sdkhub.getAdsPlugin().preloadAds(params);
    }

    invokeRewardAds() {
        var params = {"adType": "Reward", "adId": "testx9dtjwj8hp"};
        sdkhub.getAdsPlugin().showAds(params);
    }

    invokeNativeAdfull() {
        var params = {
            "adType": "Native",
            "adId": "testy63txaom86",
            "nativeLayout": "native_full",
            "requestCustomDislikeThisAd": "1",
            "choicesPosition": "3",
            "videoConfiguration": "1",
            "audioFocusType": "NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE",
            "startMuted": "0",
            "customizeOperateRequested": "1"
        };
        sdkhub.getAdsPlugin().showAds(params);
    }

    invokeNativeAd() {
        var params = {
            "adType": "Native",
            "adId": "testy63txaom86",
            "nativeLayout": "native_small",
            "requestCustomDislikeThisAd": "1",
            "choicesPosition": "3",
            "videoConfiguration": "1",
            "audioFocusType": "NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE",
            "startMuted": "0",
            "customizeOperateRequested": "1"
        };
        sdkhub.getAdsPlugin().showAds(params);
    }

    invokepreIntertitialsAds() {
        var params = {"adType": "Interstitial", "adId": "testb4znbuh3n2"};
        sdkhub.getAdsPlugin().preloadAds(params);
    }

    invokeIntertitialsAds() {
        var params = {"adType": "Interstitial", "adId": "testb4znbuh3n2"};
        sdkhub.getAdsPlugin().showAds(params);
    }

}

