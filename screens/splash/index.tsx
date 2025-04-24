import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Heading } from "@/components/ui/heading";
import { useColorScheme } from "nativewind";

import { useRouter } from "@unitools/router";
import { SplashLayout } from "./layout";
import { Platform } from "react-native";

const SplashScreenPopulate = () => {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  return (
    <VStack
      className="w-full max-w-[440px] items-center h-full justify-center"
      space="lg"
    >
      <Heading size="2xl" className="text-center">
        Welcome to SwiftCart! 
      </Heading>
      
      <VStack className="w-full" space="lg">
        <Button
          className="w-full"
          onPress={() => {
            router.push("/sign-in");
          }}
        >
          <ButtonText className="font-medium">Log in</ButtonText>
        </Button>
        <Button
          onPress={() => {
            router.push("/sign-up");
          }}
        >
          <ButtonText className="font-medium">Sign Up</ButtonText>
        </Button>
      </VStack>
    </VStack>
  );
};

export const SplashScreen = () => {
// Check if the device is mobile or desktop and render the appropriate component
const platform = Platform.OS;

  return (
    <SplashLayout>
      <SplashScreenPopulate />
    </SplashLayout>
  );
};
