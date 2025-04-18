import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function AppBar(props: {currentPage: string}) {
    return (
        <div className="bg-gray-500 p-4">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Fichier</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="w-fit">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/conception"
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
                        <NavigationMenuLink asChild className={props.currentPage === "main" ? "selected-page" : ""}>
                            <Link href="/" className={navigationMenuTriggerStyle()}>
                                Accueil
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={props.currentPage === "tasks" ? "selected-page" : ""}>
                            <Link href="./" className={navigationMenuTriggerStyle()}>
                                Tâches
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={props.currentPage === "risks" ? "selected-page" : ""}>
                            <Link href="./" className={navigationMenuTriggerStyle()}>
                                Risques
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}