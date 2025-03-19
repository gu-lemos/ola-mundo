import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `
                ${styles.Link}
                ${isActive ? styles.linkDestacado : ''}
            `}
        >
            {children}
        </NavLink>
    )
}