import Link from "next/link";
import {Button} from "@/shared/ui/button";
import {Container} from "@/shared/ui/container";

export const MainHeader = () => {
    return (
        <header className="flex flex-row justify-center w-full border-b bg-background">
            <Container>
                <div className="flex items-center justify-between py-2">
                    <Link href="/" className="flex flex-col leading-tight">
                        <span className="text-lg font-semibold">PPA</span>
                        <span className="text-xs text-muted-foreground">Phuket Property Association</span>
                    </Link>
                    <nav className="flex items-center gap-2">
                        <Button variant="ghost" asChild>
                            <Link href="/">Главная</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="/about">О нас</Link>
                        </Button>
                    </nav>
                </div>
            </Container>
        </header>
    );
};
