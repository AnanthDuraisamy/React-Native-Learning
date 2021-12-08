//
//  RNTMapView.h
//  ReactNativeApp
//
//  Created by Ananth FSP on 25/11/21.
//

#import <UIKit/UIKit.h>

#import <MapKit/MapKit.h>
#import <React/RCTComponent.h>

NS_ASSUME_NONNULL_BEGIN

@interface RNTMapView : MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end

NS_ASSUME_NONNULL_END
