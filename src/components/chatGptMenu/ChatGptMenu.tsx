import {
  Box,
  Button,
  Circle,
  HStack,
  Menu,
  MenuSeparator,
  Portal,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsToggleOn } from "react-icons/bs";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { FaCirclePause, FaRadio } from "react-icons/fa6";

interface MenuItemDetailsProps {
  icon: ReactElement;
  title: string;
  description?: string;
  element: ReactElement;
}

function MenuItemDetails(props: MenuItemDetailsProps) {
  const { icon, title, description, element, ...rest } = props;
  return (
    <HStack w="100%" {...rest}>
      <Circle size="8">{icon}</Circle>
      <Stack gap="0">
        <Text fontSize="xs">{title}</Text>
        <Text color="fg.muted">{description}</Text>
      </Stack>
      <Spacer />
      <Box alignContent="flex-end" alignSelf="end">
        {element}
      </Box>
    </HStack>
  );
}

export default function ChatGptMenu() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button m="1" variant="ghost" size="lg" color="fg.muted">
          ChatGPT
          <BiChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="120px" borderRadius="2xl">
            <Menu.Item value="chatgpt-plus" borderRadius="2xl" py="2">
              <MenuItemDetails
                title="chatGPT Plus"
                icon={<FaStar />}
                description="Our smartest model & more"
                element={
                  <Button variant="outline" size="xs" borderRadius="full">
                    Upgrade
                  </Button>
                }
              />
            </Menu.Item>
            <Menu.Item value="chatgpt" borderRadius="2xl">
              <MenuItemDetails
                title="ChatGpt"
                icon={<FaRadio />}
                description="Great for every task"
                element={<FaCheckCircle size="20" />}
              />
            </Menu.Item>
            <MenuSeparator />
            <Menu.Item value="tempchat" borderRadius="2xl">
              <MenuItemDetails
                title="Temporary Chat"
                icon={<FaCirclePause />}
                description="Great for every task"
                element={<BsToggleOn size="24" />}
              />
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
