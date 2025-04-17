import {
  Box,
  Center,
  Flex,
  Stack,
  IconButton,
  HStack,
  Link,
  Circle,
  Text,
  Avatar,
  AvatarGroup,
  VStack,
  Heading,
  Input,
  InputGroup,
  FileUpload,
  Button,
  Span,
  Icon,
  Separator,
} from "@chakra-ui/react";
import { Tooltip } from "./components/ui/tooltip";
import { FaCode, FaImages, FaRegPenToSquare, FaUpload } from "react-icons/fa6";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { VscRemoteExplorer } from "react-icons/vsc";
import { MdOutlineExplore } from "react-icons/md";
import { ChatGptMenu } from "./components";
import { FaMicrophone } from "react-icons/fa6";
import { IoAnalytics } from "react-icons/io5";
import { BiStar } from "react-icons/bi";
import { FaSurprise } from "react-icons/fa";
import { useState } from "react";

interface PropmtButtonProps {
  icon?: React.ReactElement;
  description: string;
}

function PromptButton(props: PropmtButtonProps) {
  const { icon, description } = props;
  return (
    <Button variant="outline" borderRadius="full">
      {icon}
      <Span fontWeight="500" color="fg.muted">
        {description}
      </Span>
    </Button>
  );
}

function App() {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [inputValue, setInputValue] = useState(" ");

  const handleInput = (e: any) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleSideBar = () => {
    setToggleBtn(!toggleBtn);
    console.log(toggleBtn);
  };
  return (
    <Flex minH="100dvh">
      <Box
        pt="2"
        bg="bg.muted"
        w={toggleBtn ? "0" : "260px"}
        overflow="hidden"
        transition="width 0.3s ease"
      >
        <Stack h="full" px={2} py={1}>
          <Flex justify="space-between">
            <Tooltip
              content="Home"
              positioning={{ placement: "bottom" }}
              showArrow
            >
              <IconButton variant="ghost" onClick={() => handleSideBar()}>
                <TbLayoutSidebarLeftExpand fontSize="2xl" color="fg.subtl" />
              </IconButton>
            </Tooltip>
            <Tooltip
              content="New Chat"
              positioning={{ placement: "bottom" }}
              showArrow
            >
              <IconButton variant="ghost">
                <FaRegPenToSquare />
              </IconButton>
            </Tooltip>
          </Flex>

          <Stack px="2" gap="0" flex={1}>
            <HStack
              border="none"
              _hover={{
                layerStyle: "fill.muted",
                textDecor: "none",
              }}
              px="1"
              h="10"
              borderRadius="lg"
              w="100%"
              whiteSpace="nowrap"
            >
              <Link
                position="relative"
                className="group"
                href="#"
                variant="plain"
                _hover={{ textDecor: "none" }}
                _focus={{
                  border: "none",
                  outline: "none !important",
                }}
              >
                <Circle size={6} bg="bg" borderWidth="1px">
                  <BiStar fontSize="md" />
                </Circle>
                <Text fontSize="small">ChatGPT</Text>
                <Tooltip
                  content="New Chat"
                  positioning={{ placement: "right" }}
                >
                  <IconButton _hover={{ bg: "none" }} variant="ghost">
                    <FaRegPenToSquare fontSize="md" color="bg.sublt" />
                  </IconButton>
                </Tooltip>
              </Link>
            </HStack>
            <HStack
              border="none"
              _hover={{
                layerStyle: "fill.muted",
                textDecor: "none",
              }}
              px="1"
              h="10"
              borderRadius="lg"
              w="100%"
              whiteSpace="nowrap"
            >
              <Link
                href="#"
                variant="plain"
                _hover={{ textDecor: "none" }}
                _focus={{
                  border: "none",
                  outline: "none !important",
                }}
              >
                <Circle size={6} bg="bg" borderWidth="1px">
                  <VscRemoteExplorer fontSize="md" />
                </Circle>
                <Text fontSize="small">Explore GPTs</Text>
              </Link>
            </HStack>
          </Stack>

          <Link
            href="#"
            pb="2"
            border="none"
            _hover={{
              textDecor: "none",
              borderRadius: "md",
              layerStyle: "fill.muted",
            }}
            _focus={{
              border: "none",
              outline: "none !important",
            }}
          >
            <HStack whiteSpace="nowrap">
              <Circle size={8} fontSize="lg" borderWidth="1px">
                <MdOutlineExplore fontSize={"20px"} />
              </Circle>
              <Stack gap="0">
                <Text fontSize="sm" fontWeight="medium">
                  Upgrade plan
                </Text>
                <Text fontSize="xs" color="fg.muted">
                  More access to the best models
                </Text>
              </Stack>
            </HStack>
          </Link>
        </Stack>
      </Box>
      <Box flex="1" px="2">
        <Stack h="full" flex={1}>
          <Flex w="full" justify="space-between">
            {toggleBtn && (
              <IconButton
                mt="3"
                variant="ghost"
                onClick={() => handleSideBar()}
              >
                <TbLayoutSidebarLeftExpand fontSize="2xl" color="fg.subtl" />
              </IconButton>
            )}
            <ChatGptMenu />
            <AvatarGroup>
              <Avatar.Root mr={4}>
                <Avatar.Fallback name="Rupali Preet" fontSize="md" />
                <Avatar.Image />
              </Avatar.Root>
            </AvatarGroup>
          </Flex>
          <Separator />
          <Center flex={1}>
            <VStack>
              <Heading size="3xl">What can I help with?</Heading>'
              <InputGroup
                minW="768px"
                startElement={
                  <FileUpload.Root>
                    <FileUpload.HiddenInput />
                    <FileUpload.Trigger asChild>
                      <Button variant="ghost" size="sm">
                        <FaUpload color="fg" />
                      </Button>
                    </FileUpload.Trigger>
                    <FileUpload.List />
                  </FileUpload.Root>
                }
                endElement={
                  <IconButton
                    bg="bg.emphasized"
                    size="sm"
                    borderRadius="full"
                    fontSize="xl"
                  >
                    <FaMicrophone />
                  </IconButton>
                }
              >
                <Input
                  ml="2"
                  type="text"
                  size="lg"
                  variant="subtle"
                  placeholder="Message ChatGPT"
                  borderRadius="3xl"
                  value={inputValue}
                  onChange={(e) => handleInput(e)}
                  // width="600px"
                  // h="150px"
                />
              </InputGroup>
              <HStack>
                <PromptButton
                  icon={<Icon as={FaImages} color="green.500" />}
                  description="Create Images"
                />
                <PromptButton
                  icon={<Icon as={FaCode} color="blue.500" />}
                  description="Code"
                />
                <PromptButton
                  icon={<Icon as={IoAnalytics} color="purple.500" />}
                  description="Analyze Data"
                />
                <PromptButton
                  icon={<Icon as={FaSurprise} color="cyan.400" />}
                  description="Surprize me"
                />
                <PromptButton description="More" />
              </HStack>
            </VStack>
          </Center>
          <Box pb={2} textAlign="center">
            <Center fontSize="xs" color="fg.muted">
              ChatGPT can make a mistakes. Check important info.
            </Center>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}

export default App;
