//
//  RCTConvert+Mapkit.h
//  ReactNativeApp
//
//  Created by Ananth FSP on 25/11/21.
//

//#import "RCTConvert.h"

#import "RCTConvert+Mapkit.h"

#import <MapKit/MapKit.h>
#import <React/RCTConvert.h>
#import <CoreLocation/CoreLocation.h>
#import <React/RCTConvert+CoreLocation.h>
NS_ASSUME_NONNULL_BEGIN

@interface RCTConvert (Mapkit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;
+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;

@end

NS_ASSUME_NONNULL_END
