import { NavLink, Outlet, useLocation } from "react-router-dom";
import styles from "./layout.module.css";
import cn from "classnames";
import { useState } from "react";
import Footer from "../components/Footer/Footer";

const services = [
    { name: "Ремонт и отделка", path: "repair" },
    { name: "Дизайн помещений", path: "design" },
    { name: "Строительство зданий", path: "consultation" }
];

export function Layout() {
    const location = useLocation();
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <div className={styles["layout"]}>
            <div className={styles["menu_layout"]}>
                <div>Тут будет логотип</div>
                <div className={styles["navigate"]}>
                    <div 
                        className={styles["dropdownContainer"]}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                cn(styles["goTo"], { 
                                    [styles.active]: isActive || 
                                    services.some(service => location.pathname === `/${service.path}`)
                                })
                            }
                        >
                            Услуги
                            <span className={`${styles.arrow} ${servicesOpen ? styles.rotated : ''}`}>▼</span>
                        </NavLink>

                        {servicesOpen && (
                            <div className={styles["dropdownMenu"]}>
                                {services.map((service) => (
                                    <NavLink
                                        key={service.path}
                                        to={service.path}
                                        className={({ isActive }) =>
                                            cn(styles["dropdownItem"], { 
                                                [styles.activeItem]: isActive 
                                            })
                                        }
                                        onClick={() => setServicesOpen(false)}
                                    >
                                        {service.name}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>

                    <NavLink
                        to="/prices"
                        className={({ isActive }) =>
                            cn(styles["goTo"], { [styles.active]: isActive })
                        }
                    >
                        Цены
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className={({ isActive }) =>
                            cn(styles["goTo"], {
                                [styles.active]:
                                    isActive ||
                                    location.pathname === "/Chatroom" ||
                                    location.pathname=="/Buddy",
                            })
                        }
                    >
                        Галерея
                    </NavLink>
                    <NavLink
                        to="service"
                        className={({ isActive }) =>
                            cn(styles["goTo"], { [styles.active]: isActive })
                        }
                    >
                        Сервис
                    </NavLink>
                    <NavLink
                        to="company"
                        className={({ isActive }) =>
                            cn(styles["goTo"], {
                                [styles.active]:
                                    isActive ||
                                    location.pathname === "/Settings",
                            })
                        }
                    >
                        О компании
                    </NavLink>
                    <NavLink
                        to="contacts"
                        className={({ isActive }) =>
                            cn(styles["goTo"], {
                                [styles.active]:
                                    isActive ||
                                    location.pathname === "/Settings",
                            })
                        }
                    >
                        Контакты
                    </NavLink>
                </div>
                <div>Номера связи</div>
            </div>
            <div className={styles["outlet"]}>
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
}