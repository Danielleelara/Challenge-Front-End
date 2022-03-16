import styles from './Footer.module.css';

export default function Footer() {
    return ( 
        <footer className={styles.footer}>
            <p className={styles.copy_right}>
            &copy;<span>Pacientes </span> 2022
            </p>
        </footer>
     );
}
