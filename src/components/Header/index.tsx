import { ActiveLink } from './ActiveLink';
import { SignInButton } from './SignInButton';

import styles from './styles.module.scss';


function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <img src="/images/logo.svg" alt="ig.news"/>
        
        <nav>
          <ul>
            <li>
              <ActiveLink href="/" activeClassName={styles.active}>
                <a>
                  Home
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/posts" activeClassName={styles.active}>
                <a>
                  Posts
                </a>
              </ActiveLink>
            </li>
          </ul>
        </nav>

        <SignInButton/>
      </div>
    </header>
  );
}

export { Header };
