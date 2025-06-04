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
                <div className={styles.logo}>НАЗВАНИЕ</div>
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
                            cn(styles["goTo"], { [styles.active]: isActive })
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
                            cn(styles["goTo"], { [styles.active]: isActive })
                        }
                    >
                        О компании
                    </NavLink>
                    <NavLink
                        to="contacts"
                        className={({ isActive }) =>
                            cn(styles["goTo"], { [styles.active]: isActive })
                        }
                    >
                        Контакты
                    </NavLink>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.phone}>+7 (123) 456-78-90</div>
                    <div className={styles.hours}>10:00 - 22:00</div>
                </div>
            </div>
            <div className={styles["outlet"]}>
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
}