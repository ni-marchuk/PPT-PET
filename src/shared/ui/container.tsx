import {FC, PropsWithChildren} from "react";
import {cn} from "@/shared/lib/utils";

export const Container: FC<PropsWithChildren & { className?: string }> = ({
                                                                                children,
                                                                                className,
                                                                            }) => {
    return (
        <div className={cn("w-full max-w-320 px-4", className)}>
            {children}
        </div>
    );
};
