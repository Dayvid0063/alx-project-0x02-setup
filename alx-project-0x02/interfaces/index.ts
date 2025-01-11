export interface NavItem {
    label: string;
    href: string;
}

export interface MetaData {
    title: string;
    description: string;
}

export interface CardProps {
    title: string;
    content: string;
}

export interface Post {
    id: number;
    title: string;
    content: string;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (post: Omit<Post, 'id'>) => void;
}
