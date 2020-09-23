export default class uni {
 
  ///////////////// basic ///应用级事件/////////////////////////////
  static base64ToArrayBuffer(base64) {
    return swan.base64ToArrayBuffer(base64);
  }
  static arrayBufferToBase64(arrayBuffer) {
    return swan.arrayBufferToBase64(arrayBuffer);
  }
  static getUpdateManager(object) {
    return swan.getUpdateManager(object);
  }
  static getLaunchOptionsSync(object) {
    return swan.getLaunchOptionsSync(object);
  }
 
  static onPageNotFound(object) {
    return swan.onPageNotFound(object);
  }
  static onError(object) {
    return swan.onError(object);
  }
  static onAppShow(object) {
    return swan.onAppShow(object);
  }
  static onAppHide(object) {
    return swan.onAppHide(object);
  }
  static offPageNotFound(object) {
    return swan.offPageNotFound(object);
  }
  static offError(object) {
    return swan.offError(object);
  }

  static offAppShow(object) {
    return swan.offAppShow(object);
  }
  
  static offAppHide(object) {
    return swan.offAppHide(object);
  }

  static setEnableDebug(object) {
    return swan.setEnableDebug(object);
  }
  static getLogManager(object) {
    return swan.getLogManager(object);
  }
//
  static writeBLECharacteristicValue(object) {
    return swan.writeBLECharacteristicValue(object);
  }
  static readBLECharacteristicValue(object) {
    return swan.readBLECharacteristicValue(object);
  }
  static onBLEConnectionStateChange(object) {
    return swan.onBLEConnectionStateChange(object);
  }
  static onBLECharacteristicValueChange(object) {
    return swan.onBLECharacteristicValueChange(object);
  }
  static notifyBLECharacteristicValueChange(object) {
    return swan.notifyBLECharacteristicValueChange(object);
  }
  static getBLEDeviceServices(object) {
    return swan.getBLEDeviceServices(object);
  }
  static getBLEDeviceCharacteristics(object) {
    return swan.getBLEDeviceCharacteristics(object);
  }
  static createBLEConnection(object) {
    return swan.createBLEConnection(object);
  }
  static closeBLEConnection(object) {
    return swan.closeBLEConnection(object);
  }
 
  //

 
  /////////////////// Ext //////////////
  static getExtConfigSync(object) {
    return swan.getExtConfigSync(object)
  }
  static getExtConfig(object) {
    return swan.getExtConfig(object)
  }
  //////////////////// File //////////
  static getFileSystemManager(object) {
    // return swan.getFileSystemManager(object)
    console.alert("百度暂不支持getFileSystemManager")
  }
  static getFileInfo(uni_object) {
  if(!uni_object){
    return}   
var uni_filePath=uni_object.filePath
var uni_digestAlgorithm=uni_object.digestAlgorithm
var uni_success=uni_object.success
var uni_fail=uni_object.fail
var uni_complete=uni_object.complete
var swan_object={}
if(uni_filePath){
    swan.object.filePath=uni_filePath}
    if(uni_digestAlgorithm){
     swan.object.digestAlgorithm=uni_digestAlgorithm
    }
if(uni_success){
    swan.object.success=uni_success}
    if(uni_fail){
    swan.object.fail=uni_fail}
    if(uni_complete){
    swan.object.complete=uni_complete}

swan_object.success = function (swan_res) {
        var uni_res = {
          size: swan_res.size,
        //   errMsg: swan_res.errMsg,//uniapp有baidu没有,需编程
                  digest: swan_res.digest//微信的

        };
        if (uni_object.success) {
          uni_object.success(uni_res);
        }
        if (uni_object.complete) {
          uni_object.complete(uni_res);
        }
      };
      swan_object.fail = function (swan_res) {
        if (uni_object.fail) {
          uni_object.fail(uni_res);
        }
        if (uni_object.complete) {
          uni_object.complete(uni_res);
        }
      };
    
    return getFileInfo(swan_object);
  }
  static removeSavedFile(object) {
    return swan.removeSavedFile(object)
  }
  static getSavedFileInfo(uni_object) {
    if(!uni_object){
    return}   
var uni_filePath=uni_object.filePath
var uni_success=uni_object.success
var uni_fail=uni_object.fail
var uni_complete=uni_object.complete
var swan_object={}
if(uni_filePath){
    swan.object.filePath=uni_filePath}
if(uni_success){
    swan.object.success=uni_success}
    if(uni_fail){
    swan.object.fail=uni_fail}
    if(uni_complete){
    swan.object.complete=uni_complete}

swan_object.success = function (swan_res) {
        var uni_res = {
          size: swan_res.size,
        //   errMsg: swan_res.errMsg,//uniapp有baidu没有,需编程
                  createTime: swan_res.createTime

        };
        if (uni_object.success) {
          uni_object.success(uni_res);
        }
        if (uni_object.complete) {
          uni_object.complete(uni_res);
        }
      };
      swan_object.fail = function (swan_res) {
        if (uni_object.fail) {
          uni_object.fail(uni_res);
        }
        if (uni_object.complete) {
          uni_object.complete(uni_res);
        }
      };
    
    return getSavedFileList(swan_object);
  }
  //
static getSavedFileList(uni_object) {
    if(!uni_object){
    return}   
var uni_success=uni_object.success
var uni_fail=uni_object.fail
var uni_complete=uni_object.complete
var swan_object={}
if(uni_success){
    swan.object.success=uni_success}
    if(uni_fail){
    swan.object.fail=uni_fail}
    if(uni_complete){
    swan.object.complete=uni_complete}

swan_object.success = function (swan_res) {
        var uni_res = {
          fileList: swan_res.fileList
        //   errMsg: swan_res.errMsg,//uniapp有baidu没有,需编程
         

        };
        if (uni_object.success) {
          uni_object.success(uni_res);
        }
        if (uni_object.complete) {
          uni_object.complete(uni_res);
        }
      };
      swan_object.fail = function (swan_res) {
        if (uni_object.fail) {
          uni_object.fail(uni_res);
        }
        if (uni_object.complete) {
          uni_object.complete(uni_res);
        }
      };
    
    return getSavedFileList(swan_object);
  }
  //
  static openDocument(object) {
    return swan.openDocument(object)
  }
  static saveFile(object) {
    return swan.saveFile(object);
  } 
  //////////////// Network ///////////////
  static request(uni_object) {
        if(!uni_object){return}
var uni_url=uni_object.url
var uni_data=uni_object.data
var uni_header=uni_object.header
var uni_method=uni_object.method||"GET"
var uni_timeout=uni_object.timeout||30000
var uni_dataType=uni_object.dataType||"json"
var uni_responseType=uni_object.responseType||"text"
var uni_success=uni_object.success
var uni_fail=uni_object.fail
var uni_complete=uni_object.complete
var swan_object={}
if(uni_url){
swan_object.url=uni_url}
if(uni_data){
swan_object.data=uni_data}
if(uni_header){
swan_object.header=uni_header}
if(uni_method){
swan_object.uni_method=uni_method}
if(uni_timeout){
swan_object.timeout=uni_timeout}
if(uni_dataType){
swan_object.dataType=uni_dataType}
if(uni_responseType){
swan_object.responseType=uni_responseType}
if(uni_success){
swan_object.success=uni_success}
if(uni_fail){
swan_object.fail=uni_fail}
if(uni_complete){
swan_object.complete=uni_complete}

swan_object.success = function (swan_res) {
        var uni_res = {
          data: swan_res.data,
          statusCode: swan_res.statusCode,
          header: swan_res.header,
        //   cookies:swan_res.cookies//uniapp有baidu没有，需编程

        };
        if (uni_object.success) {
          uni_object.success(uni_res);
        }
        if (uni_object.complete) {
          uni_object.complete(uni_res);
        }
      };
      swan_object.fail = function (swan_res) {
        if (uni_object.fail) {
          uni_object.fail(uni_res);
        }
        if (uni_object.complete) {
          uni_object.complete(uni_res);
        }
      };
    return request(swan_object)
  }
  static downloadFile(object) {
    return swan.downloadFile(object)
  }
  static uploadFile(object) {
    return swan.uploadFile(object)
  }
  //////////////////////////////websocket///////////////////////////////////////
  static connectSocket(object) {
    return swan.connectSocket(object)
  }
  static onSocketError(object) {
    return swan.onSocketError(object)
  }
  static onSocketMessage(object) {
    return swan.onSocketMessage(object)
  }
  static onSocketClose(object) {
    return swan.onSocketClose(object)
  }
  static onSocketOpen(object) {
    return swan.connectSocket(object)
  }
  static sendSocketMessage(object) {
    return swan.sendSocketMessage(object)
  }
  static closeSocket(object) {
    return swan.closeSocket(object)
  }

 ////////////////////////////////mDNS////////////////////////////////////////////
  static stopLocalServiceDiscovery(object) {
    // return swan.stopLocalServiceDiscovery(object);
    console.alert("百度不支持");
  }
  static startLocalServiceDiscovery(object) {
    // return swan.startLocalServiceDiscovery(object);
    console.alert("百度不支持");
  }
  static onLocalServiceResolveFail(callback) {
    // return swan.onLocalServiceResolveFail(callback);
    console.alert("百度不支持");
  }
  static onLocalServiceLost(callback) {
    // return swan.onLocalServiceLost(callback);
    console.alert("百度不支持");
  }
  static onLocalServiceFound(callback) {
    // return swan.onLocalServiceFound(callback);
    console.alert("百度不支持");
  }
  static onLocalServiceDiscoveryStop(callback) {
    // return swan.onLocalServiceDiscoveryStop(callback);
    console.alert("百度不支持");
  }
  static offLocalServiceResolveFail(callback) {
    // return swan.offLocalServiceResolveFail(callback);
    console.alert("百度不支持");
  }
  static offLocalServiceLost(callback) {
    // return swan.offLocalServiceLost(callback);
    console.alert("百度不支持");
  }
  static offLocalServiceFound(callback) {
    // return swan.offLocalServiceFound(callback);
    console.alert("百度不支持");
  }
  static offLocalServiceDiscoveryStop(callback) {
    // return swan.offLocalServiceDiscoveryStop(callback);
    console.alert("百度不支持");
  }
  ///////////////////////////UDP通信////////////////////////////////////////
  static createUDPSocket(){
    // return swan.createUDPSocket();
    console.alert("百度不支持");
  }
  ///////// Open Interface ///////////////////////////////////////////////
  static checkSession() {
    var now = new Date().getTime();
    return getApp().onekitswan._jscode && getApp().onekitswan._login && now <= getApp().onekitswan._login + 1000 * 60 * 60 * 24 * 3;
  }
  static checkSession(object) {
    if (uni.checkSession()) {
      if (object.success) {
        object.success();
      }
      if (object.complete) {
        object.complete();
      }

    } else {
      if (object.fail) {
        object.fail();
      }
      if (object.complete) {
        object.complete();
      }
    }
  }
  static login = function(object) {//
    var that = this;
    if (!object) {
      return swan.login(object);
    }
    var object2 = {};
    object2.success = function(res) {
      getApp().onekitswan._code = res.code;
      getApp().onekitswan._login = new Date().getTime();
      var result = {
        code: res.code
      };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object.fail(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    }
    if (uni.checkSession()) {
      object2.success({
        code: getApp().onekitswan._code
      });
    } else {
      swan.login(object2);
    }
  };
  static requestPolymerPayment = function(object) {
   uni.login({
      success(res) {
        var code = res.code;
        var url = getApp().onekitswan.server + "orderinfo";
        swan.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: "POST",
          data: {
            orderInfo: JSON.stringify(object.orderInfo),
            code: code
          },
          success(res) {
            swan.requestPayment({
              appId: res.data.appId,
              timeStamp: res.data.timeStamp,
              nonceStr: res.data.nonceStr,
              package: res.data.package,
              signType: res.data.signType,
              paySign: res.data.paySign,
            })
            if (object.success) {
              object.success(res);
            }
            if (object.complete) {
              object.complete(res);
            }
          },
          fail(res) {
            if (object.fail) {
              object.fail(res);
            }
          }
        })
      }
    });

  }
  static getUserInfo(data, callback, isAPI) {
    console.log(data);
   uni.login({
      success(res) {
        var code = res.code;
        var url = getApp().onekitswan.server + "userinfo";
        swan.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: "POST",
          data: {
            isAPI,
            withCredentials: true,
            data: JSON.stringify(data),
            code: code
          },
          success(res) {
            callback(res.data);
          },
          fail(res) {
            console.error(res)
          }
        })
      }
    })

  }
  static getUserInfo(object) {
    getApp().onekitswan.getuserinfo = (data) => {
     uni._getUserInfo(data, (res) => {
        if (object.success) {
          object.success(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }, true);
    }
    swan.navigateTo({
      url: '/onekitwx/page/getuserinfo/getuserinfo'
    })
  }
  static getOpenData = function(object) {
    function success(opendata) {
      var opendata = opendata.userInfo;
      getApp().onekitswan.opendata = opendata;
      getApp().onekitswan.opendataCallbacks = [];
      for (var cb = 0; cb < getApp().onekitswan.opendataCallbacks.length; cb++) {
        getApp().onekitswan.opendataCallbacks[cb](opendata);
      }
      if (object.success) {
        object.success(opendata);
      }
      if (object.complete) {
        object.complete(opendata);
      }
    }
    var opendata = getApp().onekitswan.opendata;
    if (opendata) {
      if (Object.keys(opendata) > 0) {
        object.success(opendata);
      } else {
        if (object.success) {
          getApp().onekitswan.opendataCallbacks.push(object.success);
        }
      }
      return;
    }
    getApp().onekitswan.opendata = {};
   uni.login({
      success(res) {
        var code = res.code;
       uni.getUserInfo({
          success(res) {
            var url = getApp().onekitswan.server + "userinfo";
            swan.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                withCredentials: false,
                isAPI: false,
                code: code
              },
              success(res) {
                success(res.data);
              },
              fail(res) {
                console.log(res);
              }
            });
          }
        });
      }
    })

  };
  static getPhoneNumber = function(data, callback) {
   uni.login({
      success(res) {
        var code = res.code;
        var url = getApp().onekitswan.server + "phonenumber";
        swan.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: "POST",
          data: {
            code,
            data: JSON.stringify(data)
          },
          success(res) {
            callback(res.data);
          }
        })
      }
    });
  }
  static navigateToMiniProgram(uni_object) {
    if(!uni_object){
return}
var uni_appId=uni_object.appId
var uni_path=uni_object.path
var uni_extraData=uni_object.extraData
var uni_envVersion=uni_object.envVersion
var uni_success=uni_object.success
var uni_fail=uni_object.fail
var uni_complete=uni_object.complete
var swan_object={}

if(uni_appId){
swan_object.appKey=uni_appId}
if(uni_path){
swan_object.path=uni_path}
if(uni_extraData){
swan_object.extraData=uni_extraData}
if(uni_envVersion){
swan_object.envVersion=uni_envVersion}
if(uni_success){
    swan.object.success=uni_success}
if(uni_fail){
    swan.object.fail=uni_fail}
if(uni_complete){
    swan.object.complete=uni_complete}

swan_object.success = function (swan_res) {
        var uni_res = {
         

        };
        if (uni_object.success) {
          uni_object.success(uni_res);
        }
        if (uni_object.complete) {
          uni_object.complete(uni_res);
        }
      };
      swan_object.fail = function (swan_res) {
        if (uni_object.fail) {
          uni_object.fail(uni_res);
        }
        if (uni_object.complete) {
          uni_object.complete(uni_res);
        }
      };
    
    return navigateToSmartProgram(swan_object);
  }
  static navigateBackMiniProgram(object) {
    return swan.navigateBackSmartProgram(object)
  }
  static getAccountInfoSync(object) {//百度没找到未完成
    return swan.getAccountInfoSync(object)
  }

  static reportMonitor(object) {
    return swan.reportMonitor(object)
  }
  static reportAnalytics(object, eventName) {
    return swan.reportAnalytics(object, eventName)
  }
  static requestPayment(object) {//支付参数不一致,未完成
    // return swan.requestPayment(object);
  }
  static authorize(object) {
    return swan.authorize(object)
  }
  static openSetting(object) {
    return swan.openSetting(object)
  }
  static getSetting(object) {
    return swan.getSetting(object)
  }
  static chooseAddress(object) {
    return swan.chooseAddress(object)
  }
  static openCard(object) {
    // return swan.openCard(object);
    console.alert("百度暂不支持openCard卡券")
  }
  static chooseInvoiceTitle(object) {
    return swan.chooseInvoiceTitle(object)
  }
  static addCard = function(object) {
    return swan.addCard(object);
  }
  
  static chooseInvoice(object) {
    return swan.chooseInvoice(object)
  }

  static getWeRunData(object) {//微信的计步器,百度不支持
    // return swan.getWeRunData(object)
    console.alert("百度暂不支持getWeRunData")
  }
  static reportMonitor(name, value) {
    var js_code = getApp().onekit.jscode;
    swan.httpRequest({
      url: "http://192.168.0.106:8080/onekit_adapter/reportMonitor",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        js_code: js_code,
        name: name,
        number: value
      },
      success: (res) => {
        console.log("success")
        console.log(res.data);
      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {
        console.log(res)
      }

    });
  };
  ////////// Router ///////////////////////////////////////////
  static navigateTo(object) {///events参数未完成
    return swan.navigateTo(object);
  }
  static redirectTo(object) {
    return swan.redirectTo(object);
  }
  static reLaunch(object) {
    return swan.reLaunch(object);
  }
  static switchTab(object) {
    return swan.switchTab(object);
  }
  static navigateBack(object) {
    return swan.navigateBack(object);
  }
 
  ///////////// Share /////////////
  static updateShareMenu(object) {
    return swan.updateShareMenu(object)
  }
  static showShareMenu(object) {//baidu的是openShare,
    // return swan.showShareMenu(object);
  }
  static hideShareMenu(object) {
    return swan.hideShareMenu(object)
  }
  static getShareInfo(object) {
    return swan.getShareInfo(object)
  }
  static share(object){
    console.alert("本平台不支持")
  }
  static shareWithSystem(object){
        console.alert("本平台不支持")

  }
  ////////数据缓存/////// Storage //////////////
  static setStorage(object) {
    return swan.setStorage(object)
  }
  static setStorageSync(key, value) {
    return swan.setStorageSync(key, value)
  }
  static getStorage(object) {
    return swan.getStorage(object)
  }
  static getStorageSync(key) {
    return swan.getStorageSync(key);
  }
  static getStorageInfo(object) {
    return swan.getStorageInfo(object)
  }
  static getStorageInfoSync(object) {
    return swan.getStorageInfoSync(object)
  }
  static removeStorage(object) {
    return swan.removeStorage(object)
  }
  static removeStorageSync(object) {
    return swan.removeStorageSync(object)
  }
  static clearStorage(object) {
    return swan.clearStorage(object)
  }
  static clearStorageSync(object) {
    return swan.clearStorageSync(object)
  }
    /////////位置/// Location ///////////////
    static getLocation(object) {
      return swan.getLocation(object)
    }
    static chooseLocation(object) {
      return swan.chooseLocation(object)
    }
    static openLocation(object) {
      return swan.openLocation(object)
    }
    static createMapContext(object) {
      return swan.createMapContext(object)
    }
 ///////////////////////媒体///////////// Media //////////////////////////////////////
                ///////////////////图片/////image///////////////////////////////
 static chooseImage(object) {
  return swan.chooseImage(object);
}
static previewImage(object) {
  return swan.previewImage(object)
}
static getImageInfo(object) {
  return swan.getImageInfo(object)
}
static saveImageToPhotosAlbum(object) {
  return swan.saveImageToPhotosAlbum(object)
}
 static compressImage(object) {
  return swan.compressImage(object)
}
static chooseMessageFile(object){
//   return swan.chooseMessageFile(object)
console.alert("百度暂不支持chooseMessageFile")
}
                    /////////////////////////////录音/////////////////////////////////////////
static getRecorderManager(object) {
  return swan.getRecorderManager(object)
}
                    ////////////////////////背景音频///////////////////////////////
static getBackgroundAudioManager(object) {
  return swan.getBackgroundAudioManager(object)
}
                    ////////////////////////音频组件控制///////////////////////////////
static createInnerAudioContext(object) {
  return swan.createInnerAudioContext(object)
}
                    ////////////////////////视频///////////////////////////////

static chooseVideo(object) {
  return swan.chooseVideo(object)
}
static chooseMedia(object) {
//   return swan.chooseMedia(object)
console.alert("百度暂不支持chooseMedia")


}
static saveVideoToPhotosAlbum(object) {
  return swan.saveVideoToPhotosAlbum(object)
}
static getVideoInfo(object){
//   return swan.getVideoInfo(object)
console.alert("百度暂不支持getVideoInfo")


}
static compressVideo(object){
//   return swan.compressVideo(object)
  console.alert("百度暂不支持compressVideo")

}
static openVideoEditor(object){
//   return swan.openVideoEditor(object)
  console.alert("百度暂不支持openVideoEditor")

}
                    ////////////////////////视频，相机，直播组件控制///////////////////////////////
static createVideoContext(object) {
  return swan.createVideoContext(object)
}
static createCameraContext(cameraId,ui) {
  return new CameraContext(swan.createCameraContext(cameraId));
} 
static createLivePlayerContext(playerId,ui) {
  return new LivePlayerContext(swan.createLivePlayerContext(playerId));
}
static createLivePusherContext(object) {
//   return swan.createLivePusherContext(object)
  console.alert("百度暂不支持createLivePusherContext")


}
static createMediaContainer(){
//   return swan.createMediaContainer()
  console.alert("百度暂不支持createMediaContainer")

}
/////////////////////////系统信息//////////////////////////////
static getSystemInfo(object) {
  return swan.getSystemInfo(object);
}
static getSystemInfoSync() {
  return swan.getSystemInfoSync();
}
static canIUse(object) {
  return true;
}
//////////////////////////////内存/////////////////////////////
static onMemoryWarning(object) {
  return swan.onMemoryWarning(object);
}
/////////////////////////////网络状态/////////////////////////////
static getNetworkType = function(object) {
  return swan.getNetworkType(object);
}
static _network = function(res) {
  return swan._network(object);
}
static onNetworkStatusChange(callback) {
  return swan.onNetworkStatusChange(callback);
}
/////////////////////系统主题////////////////////

//////////////////////加速度计////////////////////
static onAccelerometerChange(callback) {
  return swan.onAccelerometerChange(callback);
}
static stopAccelerometer(object) {
  return swan.stopAccelerometer(object);
}
static startAccelerometer(object) {
  return swan.startAccelerometer(object);
}
//////////////////////罗盘////////////////////
static onCompassChange(callback) {
  return swan.onCompassChange(callback);
}
static stopCompass(object) {
  return swan.stopCompass(object);
}
static startCompass(object) {
  return swan.startCompass(object);
}
//////////////////////陀螺仪////////////////////
static onGyroscopeChange(object) {
//   return swan.onGyroscopeChange(object);
  console.alert("百度暂不支持onGyroscopeChange")

}
static stopGyroscope(object) {
//   return swan.stopGyroscope(object);
  console.alert("百度暂不支持stopGyroscope")

}
static startGyroscope(object) {
//   return swan.startGyroscope(object);
  console.alert("百度暂不支持startGyroscope")

}
//////////////////////电话////////////////////
static makePhoneCall = function(object) {
  return swan.makePhoneCall(object);
}
//
static scanCode = function(uni_object) {
if(!uni_object){
return}
var uni_onlyFromCamera=uni_object.onlyFromCamera
var uni_scanType=uni_object.scanType
var uni_success=uni_object.success
var uni_fail=uni_object.fail
var uni_complete=uni_object.complete
var swan_object={}
if(uni_onlyFromCamera){
swan_object.onlyFromCamera=uni_onlyFromCamera}
if(uni_scanType){
swan_object.scanType=uni_scanType}
swan_object.success = function (swan_res) {
        var uni_res = {
          result: swan_res.result,
          scanType: swan_res.scanType,
          charSet: swan_res.charSet,
        //   path:swan_res.path uniapp有百度没有，需要编程

        };
        if (uni_object.success) {
          uni_object.success(uni_res);
        }
        if (uni_object.complete) {
          uni_object.complete(uni_res);
        }
      };
      swan_object.fail = function (swan_res) {
        if (uni_object.fail) {
          uni_object.fail(uni_res);
        }
        if (uni_object.complete) {
          uni_object.complete(uni_res);
        }
      };
    
    return scanCode(swan_object);
}
//
static getClipboardData(object) {
  return swan.getClipboardData(object);
}
static setClipboardData(object) {
  return swan.setClipboardData(object);
}
//
static setScreenBrightness(object) {
  return swan.setScreenBrightness(object);
}
static setKeepScreenOn(object) {
  return swan.setKeepScreenOn(object);
}
static getScreenBrightness(object) {
  return swan.getScreenBrightness(object);
}
//
static onUserCaptureScreen(object) {
  return swan.onUserCaptureScreen(object);
}
//
static vibrate(object){
  return swan.vibrateShort(object);
  }

static vibrateLong(object) {
  return swan.vibrateLong(object);
}
static vibrateShort(object) {
  return swan.vibrateShort(object);
}
//
static addPhoneContact(object) {
  return swan.addPhoneContact(object);
}
///////蓝牙/暂不支持/////
static stopBluetoothDevicesDiscovery(object) { 
  //  return swan.stopBluetoothDevicesDiscovery(object);
      console.alert("暂不支持stopBluetoothDevicesDiscovery")

  }
static startBluetoothDevicesDiscovery(object) {
  // return swan.startBluetoothDevicesDiscovery(object);
        console.alert("暂不支持startBluetoothDevicesDiscovery")

}
static openBluetoothAdapter(object) { 
  //  return swan.openBluetoothAdapter(object); 
        console.alert("暂不支持openBluetoothAdapter")

}
static onBluetoothDeviceFound(object) {
  // return swan.onBluetoothDeviceFound(object);
        console.alert("暂不支持onBluetoothDeviceFound")

}
static onBluetoothAdapterStateChange(object) {
  // return swan.onBluetoothAdapterStateChange(object);
        console.alert("暂不支持onBluetoothAdapterStateChange")

}
static getConnectedBluetoothDevices(object) {
  // return swan.getConnectedBluetoothDevices(object);
        console.alert("暂不支持getConnectedBluetoothDevices")

}
static getBluetoothDevices(object) {
  // return swan.getBluetoothDevices(object);
        console.alert("暂不支持getBluetoothDevices")

}
static getBluetoothAdapterState(object) {
  // return swan.getBluetoothAdapterState(object);
        console.alert("暂不支持getBluetoothAdapterState")

}
static closeBluetoothAdapter(object) {
  // return swan.closeBluetoothAdapter(object);
        console.alert("暂不支持closeBluetoothAdapter")

}
////低功耗蓝牙/////
static setBLEMTU(object){
  // return swan.setBLEMTU(object)
        console.alert("暂不支持setBLEMTU")

}
static writeBLECharacteristicValue(object){
  // return swan.writeBLECharacteristicValue(object)
        console.alert("暂不支持writeBLECharacteristicValue")

}
static readBLECharacteristicValue(object){
  //return swan.readBLECharacteristicValue(object)
        console.alert("暂不支持readBLECharacteristicValue")

}
static onBLEConnectionStateChange(object){
//  return swan.onBLEConnectionStateChange(object)
      console.alert("暂不支持onBLEConnectionStateChange")

}
static onBLECharacteristicValueChange(object){
 // return swan.onBLECharacteristicValueChange(object)
       console.alert("暂不支持onBLECharacteristicValueChange")

}
static notifyBLECharacteristicValueChange(object){
 // return swan.notifyBLECharacteristicValueChange(object)
       console.alert("暂不支持notifyBLECharacteristicValueChange")

}
static getBLEDeviceServices(object){
 // return swan.getBLEDeviceServices(object)
       console.alert("暂不支持getBLEDeviceServices")

}
static getBLEDeviceRSSI(object){
//  return swan.getBLEDeviceRSSI(object)
      console.alert("暂不支持getBLEDeviceRSSI")

}
static getBLEDeviceCharacteristics(object){
//  return swan.getBLEDeviceCharacteristics(object)
      console.alert("暂不支持getBLEDeviceCharacteristics")

}
static createBLEConnection(object){
 // return swan.createBLEConnection(object)
       console.alert("暂不支持createBLEConnection")

}
static closeBLEConnection(object){
 // return swan.closeBLEConnection(object)
       console.alert("暂不支持closeBLEConnection")

}

 ////////////// iBeacon //////////////////
 static onBeaconServiceChange(object) {
 // return swan.onBeaconServiceChange(object);
       console.alert("暂不支持onBeaconServiceChange")

}
static onBeaconUpdate(object) {
 // return swan.onBeaconUpdate(object);
       console.alert("暂不支持onBeaconUpdate")

}
static getBeacons(object) {
 // return swan.getBeacons(object);
       console.alert("暂不支持getBeacons")

}
static stopBeaconDiscovery(object) {
 // return swan.stopBeaconDiscovery(object);
       console.alert("暂不支持stopBeaconDiscovery")

}
static startBeaconDiscovery(object) {
//  return swan.startBeaconDiscovery(object);
      console.alert("暂不支持startBeaconDiscovery")

}
//////////////Wi-Fi/////////////
static stopWifi(object) {
  // return swan.stopWifi(object);
  console.alert("百度暂不支持stopWifi")
}
static startWifi(object) {
  // return swan.startWifi(object);
    console.alert("百度暂不支持startWifi")

}
static setWifiList(object) {
  // return swan.setWifiList(object);
    console.alert("百度暂不支持setWifiList")

}
static onWifiConnected(object) {
  // return swan.onWifiConnected(object);
    console.alert("百度暂不支持onWifiConnected")

}
static onGetWifiList(object) {
  // return swan.onGetWifiList(object);
    console.alert("百度暂不支持onGetWifiList")

}
static offWifiConnected(callback){
  // return swan.offWifiConnected(callback)
    console.alert("百度暂不支持offWifiConnected")

}
static offGetWifiList(callback){
  // return swan.offGetWifiList(callback)
    console.alert("百度暂不支持offGetWifiList")

}
static getWifiList(object) {
  // return swan.getWifiList(object);
    console.alert("百度暂不支持getWifiList")

}
static getConnectedWifi(object) {
  // return swan.getConnectedWifi(object);
    console.alert("百度暂不支持getConnectedWifi")

}
static connectWifi(object) {
  // return swan.connectWifi(object);
    console.alert("百度暂不支持connectWifi")

}
/////////////////电量/////////////////
static getBatteryInfoSync(object) {
  return swan.getBatteryInfoSync(object);
}
static getBatteryInfo(object) {
  return swan.getBatteryInfo(object);
}

/////////////////////NFC/////////
 static stopHCE(object) {
  // return swan.stopHCE(object);
      console.alert("百度暂不支持stopHCE")

}
static startHCE(object) {
  // return swan.startHCE(object);
        console.alert("百度暂不支持startHCE")

}
static sendHCEMessage(object) {
  // return swan.sendHCEMessage(object);
        console.alert("百度暂不支持sendHCEMessage")

}
static onHCEMessage(object) {
  // return swan.onHCEMessage(object);
        console.alert("百度暂不支持onHCEMessage")

}
static offHCEMessage(callback){
// return swan.offHCEMessage(callback)
      console.alert("百度暂不支持offHCEMessage")

}
static getNFCAdapter(){
  // return swan.getNFCAdapter()
        console.alert("百度暂不支持getNFCAdapter")

}
static getHCEState(object) {
  // return swan.getHCEState(object);
        console.alert("百度暂不支持getHCEState")

}
//////////////////设备方向/////////

static onDeviceMotionChange(object) {
  // return swan.onDeviceMotionChange(object);
          console.alert("百度暂不支持onDeviceMotionChange")

}
static stopDeviceMotionListening(object) {
  // return swan.stopDeviceMotionListening(object);
            console.alert("百度暂不支持stopDeviceMotionListening")

}
static startDeviceMotionListening(object) {
  // return swan.startDeviceMotionListening(object);
            console.alert("百度暂不支持startDeviceMotionListening")

}
static offDeviceMotionChange(callback) {
  // return swan.offDeviceMotionChange(callback);
            console.alert("百度暂不支持offDeviceMotionChange")

}
////////生物认证////////
static startSoterAuthentication(object) {
  // return swan.startSoterAuthentication(object)
   console.alert("百度暂不支持startSoterAuthentication")

}
static checkIsSupportSoterAuthentication(object) {
  // return swan.checkIsSupportSoterAuthentication(object)
     console.alert("百度暂不支持checkIsSupportSoterAuthentication")

}
static checkIsSoterEnrolledInDevice(object) {
  // return swan.checkIsSoterEnrolledInDevice(object)
     console.alert("百度暂不支持checkIsSoterEnrolledInDevice")

}
  ////////////// Worker ///////////////
  static createWorker(path) {
    return new WORKER(path);
  }
  /////////////////键盘////////////////////
  static hideKeyboard(object) {
    // return swan.hideKeyboard(object)
         console.alert("百度暂不支持hideKeyboard")

  }
  static onKeyboardHeightChange(callback){
    // return swan.onKeyboardHeightChange(callback)
         console.alert("百度暂不支持onKeyboardHeightChange")

  }
//////////////////////设备完////////////////////


  ////////////// UI ////////////////
  static showActionSheet(object) {
    return swan.showActionSheet(object);
  }
 static redirectTo(object) { return swan.redirectTo(object) }
   static redirectTo(object) { return swan.redirectTo(object) }

  static hideLoading() {
    return swan.hideLoading()
  }
  static showLoading(object) {
    return swan.showLoading(object);
  }
  static hideToast() {
    return swan.hideToast();
  }
  static showToast(object) {
    return swan.showToast(object);
  }
  static showModal(object) {
    return swan.showModal(object);
  }
  //////////////////////////////////////
  static setNavigationBarColor(object) {
    return swan.setNavigationBarColor(object)
  }
  static hideNavigationBarLoading(object) {
    return swan.hideNavigationBarLoading(object)
  }
  static showNavigationBarLoading(object) {
    return swan.showNavigationBarLoading(object)
  }
  static hideHomeButton(object){
    // return swan.hideHomeButton(object)
             console.alert("百度暂不支持hideHomeButton")

  }
///////////////////////////////////
static setTabBarItem(object) {
  return swan.setTabBarItem(object)
}
static setTabBarStyle(object) {
  return swan.setTabBarStyle(object)
}
static hideTabBar(object) {
  return swan.hideTabBar(object)
}
static showTabBar(object) {
  return swan.showTabBar(object)
}
static removeTabBarBadge(object) {
  return swan.removeTabBarBadge(object)
}
static setTabBarBadge(object) {
  return swan.setTabBarBadge(object)
}
static hideTabBarRedDot(object) {
  return swan.hideTabBarRedDot(object)
}
static showTabBarRedDot(object) {
  return swan.showTabBarRedDot(object)
}
static onTabBarMidButtonTap(CALLBACK){
  console.alert("本平台暂不支持onTabBarMidButtonTap")
}
///////////////////////////////////////////////
static setBackgroundTextStyle(object) {
    return swan.setBackgroundTextStyle(object)
  }
  static setBackgroundColor(object) {
    return swan.setBackgroundColor(object)
  }
   /////////////////// animation //////////////////////////
   static createAnimation(object) {
    return swan.createAnimation(object);
  }
/////////////////////滚动//////////////////
static pageScrollTo(object) {
  return swan.pageScrollTo(object)
}
//////////////////窗口////////////////////////
static offWindowResize(object) {
//   return swan.offWindowResize(object)
  console.alert("本平台暂不支持offWindowResize")

}
static onWindowResize(object) {
//   return swan.onWindowResize(object)
  console.alert("本平台暂不支持onWindowResize")

}
/////////////////字体/////////////////////////
static loadFontFace(object) {
//   return swan.loadFontFace(object)
  console.alert("本平台暂不支持loadFontFace")


}
/////////////////下拉/////////////////////////
static PullDownRefresh() {
  return swan.startPullDownRefresh();
}
static stopPullDownRefresh() {
  return swan.stopPullDownRefresh();
}
static startPullDownRefresh(object) {
  return swan.startPullDownRefresh(object);
}
//////////////////////////////////////////
static createOffscreenCanvas() {
  // return swan.createOffscreenCanvas();
  console.alert("本平台不支持createOffscreenCanvas")
}
static createContext() {
  return new Context();
}
static createCanvasContext(canvasId,ui) {
  return new CanvasContext(swan.createCanvasContext(canvasId));
}
static canvasToTempFilePath(object) {
  return swan.canvasToTempFilePath(object);
}
static canvasPutImageData(object) {
  return swan.canvasPutImageData(object)
};
static canvasGetImageData(object) {
  return swan.canvasGetImageData(object)
};
////////////////////////广告//////////////////
static createRewardedVideoAd(object){
//   return swan.createRewardedVideoAd(object)
  console.alert("本平台不支持createRewardedVideoAd")

}
static createInterstitialAd(object){
//   return swan.createInterstitialAd(object)
  console.alert("本平台不支持createInterstitialAd")

}
////////////////////////////////
static requestSubscribeMessage(object){
  // return requestSubscribeMessage(object)
  console.alert("本平台不支持requestSubscribeMessage")
}
static preloadPage(object){
   console.alert("本平台不支持")
 }
//////////////////////////////////////////
  static setNavigationBarTitle(object) {
    return swan.setNavigationBarTitle(object);
  };

  
  static setTopBarText(object) {
    return swan.setTopBarText(object)
  }
  static nextTick(object) {
    return swan.nextTick(object)
  }
  static getMenuButtonBoundingClientRect(object) {
    return swan.getMenuButtonBoundingClientRect(object)
  }
 

static stopVoice(object) {
  return swan.stopVoice(object)
}
static pauseVoice(object) {
  return swan.pauseVoice(object)
}
static playVoice(object) {
  return swan.playVoice(object)
}
static setInnerAudioOption(object) {
  return swan.setInnerAudioOption(object)
}
static getAvailableAudioSources(object) {
  return swan.getAvailableAudioSources(object)
}

static createAudioContext(object) {
  return swan.createAudioContext(object)
}
static onBackgroundAudioStop(object) {
  return swan.onBackgroundAudioStop(object)
}
static onBackgroundAudioPause(object) {
  return swan.onBackgroundAudioPause(object)
}
static onBackgroundAudioPlay(object) {
  return swan.onBackgroundAudioPlay(object)
}
static stopBackgroundAudio(object) {
  return swan.stopBackgroundAudio(object)
}
static seekBackgroundAudio(object) {
  return swan.seekBackgroundAudio(object)
}
static pauseBackgroundAudio(object) {
  return swan.pauseBackgroundAudio(object)
}
static playBackgroundAudio(object) {
  return swan.playBackgroundAudio(object)
}
static getBackgroundAudioPlayerState(object) {
  return swan.getBackgroundAudioPlayerState(object)
}



static createInnerAudioContext(audioId,ui) {
  return new InnerAudioContext(swan.createInnerAudioContext(audioId));
}

static createVideoContext(videoId,ui) { 
  return new VideoContext(swan.createVideoContext(videoId)); 
}





  ////////////// WXML ///////////////
  static createSelectorQuery(object) {
    return swan.createSelectorQuery(object)
  }
  static createIntersectionObserver(uni_object) {
  if(!uni_object){return}
var uni_thresholds=uni_object.thresholds
var uni_initialRatio=uni_object.initialRatio
var uni_observeAll=uni_object.observeAll
var uni_success=uni_object.success
var uni_fail=uni_object.fail
var uni_complete=uni_object.complete
var swan_object={}
    if(uni_thresholds){
    swan.object.thresholds=uni_thresholds}
    if(uni_initialRatio){
    swan.object.initialRatio=uni_initialRatio}
    if(uni_observeAll){
    swan.object.selectAll=uni_observeAll}
    if(uni_success){
    swan.object.success=uni_success}
    if(uni_fail){
    swan.object.fail=uni_fail}
    if(uni_complete){
    swan.object.complete=uni_complete}
    swan_object.success = function (swan_res) {
        var uni_res = {
        };
        if (uni_object.success) {
          uni_object.success(uni_res);
        }
        if (uni_object.complete) {
          uni_object.complete(uni_res);
        }
      };
      swan_object.fail = function (swan_res) {
        if (uni_object.fail) {
          uni_object.fail(uni_res);
        }
        if (uni_object.complete) {
          uni_object.complete(uni_res);
        }
      };
        return createIntersectionObserver(swan_object)
  }
  ///////////////////////////
 static getSubNVueById(subNvueId){
  
}
static getCurrentSubNVue(){

}
static requireNativePlugin(PluginName){

}

static report( eventName , options){//统计
  return swan.reportAnalytics(eventName,options)
}
static getProvider(object){
  console.alert("本平台不支持getProvider")
}

  ///////////////////////////////////
  static createARCameraContext(object) {
    throw new Error("createARCameraContext�ݲ�֧��!!")
  }
}
uni.ai = {};
for (var api of ["ocrIdCard", "ocrBankCard", "ocrDrivingLicense", "ocrVehicleLicense", "textReview", "textToAudio", "imageAudit", "advancedGeneralIdentify", "objectDetectIdentify", "carClassify", "dishClassify", "logoClassify", "animalClassify", "plantClassify", "getVoiceRecognizer", "faceDetect", "faceMatch", "faceSearch", "facePersonVerify", "facePersonIdmatch", "faceLivenessSessioncode", "nlpLexerCustom"]) {
  ai_init(api);
}

function ai_init(api) {
 uni.ai[api] = (object) => {
    return uni_ai.run(api, object);
  }
}


