import React from "react";
import { Box, Heading, VStack, Icon } from "native-base";
import { Envelope } from "phosphor-react-native"

import Logo from "../../assets/logo_primary.svg"
import { Input } from "../../components/Inputs/input";

export function SignIn() {
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Box mb={8}>
        <Logo width={200} height={200} />
      </Box>
      <Heading color="gray.100">Olá, Diogo Silva</Heading>
      <Input
        placeholder="E-mail"
        mb={4}
        InputLeftElement={<Icon name="mail" size={24} color="gray.100" />}
      />
      <Input placeholder="Senha" />
    </VStack>
  );
}