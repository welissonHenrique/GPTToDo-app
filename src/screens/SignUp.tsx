import { Center, VStack, Text, ScrollView, HStack } from "native-base";
import LogoSvg from "@assets/logo.svg";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

type FormData = {
  email: string;
  username: string;
  password: string;
  confirm_password: string;
};

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
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
            Desenvolva suas atividades {"\n"} com o auxilio de uma IA.
          </Text>

          <Center mt={50}>
            <Text color={"gray.100"} fontSize={"md"} mb={5} fontFamily="body">
              Crie sua conta agora
            </Text>

            <Controller
              control={control}
              name="username"
              rules={{ required: "Informe o username" }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Nome do usuário"
                  autoCapitalize="none"
                  width={300}
                  borderColor={"gray.400"}
                  borderWidth={1}
                  onChangeText={onChange}
                  errorMessage={errors.username?.message}
                />
              )}
            />

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
            <Controller
              control={control}
              name="confirm_password"
              rules={{ required: "Confirme a senha digitada" }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Confirme sua senha"
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
          Já tem uma conta?
          <TouchableOpacity onPress={handleGoBack}>
            <Text ml={1} color={"yellow.500"} fontSize={"md"}>
              Acesse já
            </Text>
          </TouchableOpacity>
        </Text>
      </HStack>
    </ScrollView>
  );
}
