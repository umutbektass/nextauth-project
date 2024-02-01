import Image from "next/image";
import { Flex, Text, Button , TextField } from '@radix-ui/themes';

export default function Home() {
  return (
   <main>
    1234
    <Flex direction="column" gap="2" >
      <Text color="red">Hello from Radix Themes  </Text>
      <Button>Let&apos;s go</Button>
    </Flex>
   </main>
  );
}
