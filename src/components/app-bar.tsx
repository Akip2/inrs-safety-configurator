import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function AppBar(props: {currentPage: string}) {
    return (
        <div className="bg-black p-2">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Fichier</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="w-fit">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/"
                                            className="menu-option"
                                        >
                                            Nouveau
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/"
                                            className="menu-option"
                                        >
                                            Importer
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/"
                                            className="menu-option"
                                        >
                                            Exporter
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={props.currentPage === "tasks" ? "bg-gray-700" : ""}>
                            <Link href="/" className={navigationMenuTriggerStyle()}>
                                Tâches
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={props.currentPage === "risks" ? "bg-gray-700" : ""}>
                            <Link href="/" className={navigationMenuTriggerStyle()}>
                                Risques
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}