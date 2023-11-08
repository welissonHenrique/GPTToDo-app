import { Center, VStack, Text, ScrollView, HStack, Box } from "native-base";
import LogoSvg from "@assets/logo.svg";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { TouchableOpacity } from "react-native";

type FormData = {
  email: string;
  password: string;
};

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack bg={"gray.700"} flex={1}>
        <Center mt={100}>
          <LogoSvg width={120} height={120} />
          <Text
            mt={8}
            color="gray.200"
            fontFamily="heading"
            fontWeight={"bold"}
            textAlign={"center"}
            fontSize="lg"
          >
            Desenvolva suas atividades {"\n"} com o auxilio de uma I.A
          </Text>

          <Center mt={50}>
            <Text color={"gray.100"} fontSize={"md"} mb={5} fontFamily="body">
              Acesse sua conta já
            </Text>

            <Controller
              control={control}
              name="email"
              rules={{ required: "Informe o e-mail" }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  width={300}
                  borderColor={"gray.400"}
                  borderWidth={1}
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{ required: "Informe a senha" }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  width={300}
                  borderColor={"gray.400"}
                  borderWidth={1}
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Button width={300} mt={2} title="Acessar" />
          </Center>
        </Center>
      </VStack>

      <HStack mt={"auto"} position={"absolute"} bottom={10} flex={1}>
        <Text
          textAlign={"center"}
          fontSize={"md"}
          color={"gray.200"}
          w={"full"}
        >
          Não tem uma conta?
          <TouchableOpacity onPress={handleNewAccount}>
            <Text ml={1} color={"yellow.500"} fontSize={"md"}>
              Inscreva-se
            </Text>
          </TouchableOpacity>
        </Text>
      </HStack>
    </ScrollView>
  );
}
