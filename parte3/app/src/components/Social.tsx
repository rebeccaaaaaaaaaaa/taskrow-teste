import { Button, Center, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface SocialPros {
  name: string;
  link: string;
  icon: ReactElement;
  colorScheme: string;
}

export default function Social({ name, link, icon, colorScheme }: SocialPros) {
  return (
    <Center p={8}>
      <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
        {/* LinkedIn */}
        <Button
          w={"full"}
          colorScheme={colorScheme}
          leftIcon={icon}
          as={"a"}
          href={link}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <Center>
            <Text>{name}</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
  );
}
