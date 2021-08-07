import { Stack, Link, Fade, Image, Text, Divider, Tag, TagLabel } from "@chakra-ui/react";
import { GithubFilled, ExportOutlined } from "@ant-design/icons";

export default function Card({ 
    thumbnail,
    title,
    desc,
    link,
    github,
    tech,
}) {
    const Tech = tech.map((item) => (
        <Tag
            key={item}
            size="md"
        >
            <TagLabel>{item}</TagLabel>
        </Tag>
    ))
    return (
        <Stack
            minH="320px"
            maxH="500px"
            border="1px"
            borderColor={{ base: '#fff', md: '#ffffff'}}
        >
            <Link href={link}>
                <Fade
                    in={true}
                    transition={{ enter: { duration: 0.4, delay: 0.7 } }}
                >
                    <Image
                        width="100%"
                        height={320}
                        maxWidth={720}
                        maxHeight={320}
                        src={thumbnail}
                        transition="0.3s"
                        alt="project thumbnail"
                    ></Image>
                    <Stack px={4} py={2}>
                        <Stack isInline justifyContent="space-between" alignItems="center">
                            <Text fontSize="2xl">
                                {title}
                            </Text>
                            <Stack
                                isInline
                                justifyContent="flex-end"
                                alignItems="center"
                                spacing={4}
                            >
                                {github && (
                                    <Link
                                        href={github}
                                        
                                    >
                                        <GithubFilled />
                                    </Link>
                                )}
                                {link && (
                                    <Link
                                        href={link}
                                    >
                                        <ExportOutlined />
                                    </Link>
                                )}
                            </Stack>  
                        </Stack>
                        <Divider/> 
                        <Text>
                            {desc}
                        </Text>
                        <Stack isInline>{Tech}</Stack>
                    </Stack>
                </Fade>
            </Link>
        </Stack>
    )
}
