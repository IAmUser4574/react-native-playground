import { CircleCheck } from "lucide-react-native";
import { Pressable, PressableProps, Text, View, ViewStyle } from "react-native";
import Animated, {
    AnimatedProps,
    FadeInDown,
    FadeInLeft,
    FadeInRight,
    FadeOutLeft,
    FadeOutUp,
    interpolateColor,
    LinearTransition,
    SharedValue,
    useAnimatedStyle,
    useDerivedValue,
    withSpring,
    ZoomIn,
} from "react-native-reanimated";

// lucide's CircleCheck will crash if the underlying react-native-svg dep isn't linked
// `npx expo install react-native-svg`

// TODO - proper exit transition after onFinished()

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

// Constants
const _buttonHeight = 42;
const _spacing = 10;
const _fadeIn = FadeInDown.springify().damping(18).stiffness(200);
const _fadeInRight = FadeInRight.springify().damping(18).stiffness(200).delay(300);
const _fadeOut = FadeOutUp.springify().damping(18).stiffness(200);
const _layout = LinearTransition.springify().damping(18).stiffness(200);
const _dotContainer = 24;
const _dotSize = _dotContainer / 3;
// Colors
const _activeDotColor = "#fff";
const _inactiveDotColor = "#aaa";

// Types

type ButtonProps = AnimatedProps<
    PressableProps & {
        style: ViewStyle;
    }
>;
type OnboardingIndicatorProps = {
    data: number[];
    selectedIndex: number;
    onChange: (index: number) => void;
    onFinished: () => void
};
type PaginationProps = {
    count: number;
    selectedIndex: number;
    style?: ViewStyle;
};

type DotProps = {
    index: number;
    animation: SharedValue<number>;
};

export default function OnboardingIndicator({
    data,
    onChange,
    selectedIndex,
    onFinished
}: OnboardingIndicatorProps) {
  return (
    <View style={{ gap: _spacing }}>
        <Animated.View entering={_fadeInRight}>
            <Pagination
            selectedIndex={selectedIndex}
            count={data.length}
            style={{ alignSelf: "center" }}
            />
        </Animated.View>
      
        <Animated.View 
            entering={_fadeIn.delay(100)} 
            exiting={_fadeOut}
            style={{ flexDirection: "row", gap: _spacing }}>

            {/* Back button */}
            {selectedIndex > 0 && (
                <Button
                    style={{ backgroundColor: "#ddd" }}
                    onPress={() => {
                        onChange(selectedIndex - 1);
                    }}>
                    <Text style={{ fontWeight: "600" }}>Back</Text>
                </Button>
            )}

            {/* Continue/Finished Button */}
            <Button
                style={{ backgroundColor: "#036BFB", flex: 1 }}
                onPress={() => {
                    if (selectedIndex === data.length - 1) {
                        // on Finished
                        onFinished();
                        return;
                    }
                    onChange(selectedIndex + 1);
                }}>
                {selectedIndex === data.length - 1 ? (
                    <Animated.View
                        entering={_fadeIn}
                        exiting={_fadeOut}
                        style={{
                        flexDirection: "row",
                        gap: _spacing / 2,
                        alignItems: "center",
                        }}>
                        <Animated.View
                        entering={ZoomIn.delay(100)
                            .springify()
                            .damping(18)
                            .stiffness(200)}>
                        <CircleCheck color='white' size={18} />
                        </Animated.View>
                        <Text style={{ color: "white", fontWeight: "600" }}>
                        Finished
                        </Text>
                    </Animated.View>
                    ) : (
                    <Animated.Text
                        style={{ color: "white", fontWeight: "600" }}
                        entering={_fadeIn.delay(300)}
                        exiting={_fadeOut}
                        layout={_layout}>
                        Continue
                    </Animated.Text>
                )}
            </Button>
        </Animated.View>
    </View>
  );
}

// Reusable Button that's extending Animated from
// Reanimated

function Button({ children, style, ...rest }: ButtonProps) {
    return (
        <AnimatedPressable
            style={[
                {
                    height: _buttonHeight,
                    paddingHorizontal: _spacing * 2,
                    justifyContent: "center",
                    borderRadius: _buttonHeight,
                    alignItems: "center",
                },
                style,
            ]}
            entering={FadeInLeft.springify().damping(18).stiffness(200)}
            exiting={FadeOutLeft.springify().damping(18).stiffness(200)}
            layout={_layout}
            {...rest}>
            {children}
        </AnimatedPressable>
    );
}

// Pagination Indicator (green container)

function PaginationIndicator({
    animation,
}: {
    animation: SharedValue<number>;
}) {
    const stylez = useAnimatedStyle(() => {
        return {
        width: _dotContainer + _dotContainer * animation.value,
        };
    });

    return (
        <Animated.View
            style={[
                {
                width: _dotContainer,
                height: _dotContainer,
                borderRadius: _dotContainer,
                backgroundColor: "#29BE56",
                position: "absolute",
                left: 0,
                top: 0,
                },
                stylez,
            ]}
        />
    );
}

// Pagination Dots

function Pagination({ count, selectedIndex, style }: PaginationProps) {
    const animation = useDerivedValue(() => {
        return withSpring(selectedIndex, {
        damping: 18,
        stiffness: 200,
        });
    });
    return (
        <View style={[{ flexDirection: "row" }, style]}>
            <PaginationIndicator animation={animation} />
            {[...Array(count).keys()].map((index) => (
                <Dot key={`dot-${index}`} index={index} animation={animation} />
            ))}
        </View>
    );
}

function Dot({ index, animation }: DotProps) {
    const stylez = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
            animation.value,
            [index - 1, index, index + 1],
            [_inactiveDotColor, _activeDotColor, _activeDotColor]
            ),
        };
    });
    return (
        <View
            style={{
                width: _dotContainer,
                aspectRatio: 1,
                borderRadius: _dotContainer,
                justifyContent: "center",
                alignItems: "center",
            }}>
        <Animated.View
            style={[
                {
                    backgroundColor: _inactiveDotColor,
                    width: _dotSize,
                    aspectRatio: 1,
                    borderRadius: _dotSize,
                },
                stylez,
            ]}
        />
        </View>
    );
}
