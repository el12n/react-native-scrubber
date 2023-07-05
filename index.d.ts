import { Component } from "react";
import { TextStyle, ViewStyle } from "react-native";

interface ScrubberProps {
  value?: number;
  bufferedValue?: number;
  totalDuration?: number;
  onSlidingComplete: (value: number) => void;
  onSlidingStart?: () => any;
  onSlide?: (value: number) => any;
  tapNavigation?: boolean;
  trackBackgroundColor?: string;
  trackColor?: string;
  bufferedTrackColor?: string;
  scrubbedColor?: string;
  displayedValueStyle?: TextStyle;
  displayValues?: boolean;
  sliderVisible?: boolean;
  trackStyle?: ViewStyle;
}

declare class Scrubber extends Component<ScrubberProps, any> {}

export = Scrubber;
