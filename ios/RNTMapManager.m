//
//  RNTMapManager.m
//  ReactNativeApp
//
//  Created by Ananth FSP on 25/11/21.
//

#import "RNTMapManager.h"

@implementation RNTMapManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)
RCT_EXPORT_VIEW_PROPERTY(onRegionChange, RCTBubblingEventBlock)
RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)
{
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

-(UIView*) view
{
  RNTMapView *map = [[RNTMapView alloc] init];
  map.delegate = self;
  return map;
}

#pragma mark MKMapViewDelegate

-(void)mapView:(RNTMapView *)mapView regionDidChangeAnimated:(BOOL)animated{
  if (!mapView.onRegionChange) {
      return;
    }
  
  MKCoordinateRegion region = mapView.region;
    mapView.onRegionChange(@{
      @"region": @{
        @"latitude": @(region.center.latitude),
        @"longitude": @(region.center.longitude),
        @"latitudeDelta": @(region.span.latitudeDelta),
        @"longitudeDelta": @(region.span.longitudeDelta),
      }
    });
}
@end
