import CartButton from "@/components/CartButton";
import { images, offers } from "@/constants";
import cn from "clsx";
import { Fragment } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          const isEvent = index % 2 === 0;
          return (
            <View>
              <Pressable
                className={cn(
                  "offer-card",
                  isEvent ? "flex-row-reverse" : "flex-row"
                )}
                style={{ backgroundColor: item.color }}
                android_ripple={{ color: "#FFFF22" }}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View className="h-full w-1/2">
                      <Image
                        source={item.image}
                        className="size-full"
                        resizeMode="contain"
                      />
                    </View>
                    <View
                      className={cn(
                        "offer-card__info",
                        isEvent ? "pl-10" : "pr-10"
                      )}
                    >
                      <Text className="h1-bold text-3xl text-white leading-tight">
                        {item.title}
                      </Text>
                      <Image
                        source={images.arrowRight}
                        className="size-10"
                        resizeMode="contain"
                        tintColor={"#FFFFFF"}
                      />
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          );
        }}
        contentContainerClassName="pb-28 px-5"
        ListHeaderComponent={() => (
          <View className="flex-between flex-row w-full my-5 px-5">
            <View className="flex-start">
              <Text className="text-[10px] font-th400 text-primary">
                DELIVER TO
              </Text>
              <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
                <Text className="font-th600 text-dark-100">Croatia</Text>
                <Image
                  source={images.arrowDown}
                  className="size-3"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <CartButton/>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
