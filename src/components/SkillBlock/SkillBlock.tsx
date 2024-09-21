import { FC, ReactNode } from 'react';
import styles from './SkillBlock.module.scss';

interface ISkillBlock {
  children: ReactNode;
}

const SkillBlock: FC<ISkillBlock> = ({ children }) => {
  return (
    <>
      <div className={styles.skillBlock}>{children}</div>
    </>
  );
};

export default SkillBlock;
