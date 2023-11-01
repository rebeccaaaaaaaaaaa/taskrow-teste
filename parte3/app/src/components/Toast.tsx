import { useToast } from "@chakra-ui/react";

interface ToastProps {
    title?: string;
    description: string;
    status: 'success' | 'error' | 'warning'
    duration: number;
    isClosable: boolean;
}

export function Toast ({title, description, status, duration, isClosable} : ToastProps){
    const toast = useToast();
    
    return (
        toast({
            title: title,
            description: description,
            status: status,
            duration: duration,
            isClosable: isClosable,
        })
    )
}