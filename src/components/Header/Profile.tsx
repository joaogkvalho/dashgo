import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps){
    return(
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>João Gabriel</Text>
                    <Text color="gray.300" fontSize="small">
                        joaogkvalho@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="João Gabriel" />
        </Flex>
    )
}