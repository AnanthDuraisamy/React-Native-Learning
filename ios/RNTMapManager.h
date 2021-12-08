//
//  RNTMapManager.h
//  ReactNativeApp
//
//  Created by Ananth FSP on 25/11/21.
//

#import <MapKit/MapKit.h>

#import <React/RCTViewManager.h>

//#import "RCTViewManager.h"

#import "RNTMapView.h"
#import "RCTConvert+Mapkit.h"

NS_ASSUME_NONNULL_BEGIN

@interface RNTMapManager : RCTViewManager<MKMapViewDelegate>

@end

NS_ASSUME_NONNULL_END
