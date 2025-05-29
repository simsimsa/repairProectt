import styles from './RepairSvg.module.css'

export function RepairSVG() {
    return (<div className={styles.svgContainer}>
           <svg 
      className={styles.svgAnimation}
      width="100%" 
      height="100%" 
      viewBox="0 0 500 350" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Фон с текстурой */}
      <defs>
        <pattern id="texture" patternUnits="userSpaceOnUse" width="20" height="20">
          <path d="M0 0L20 20M20 0L0 20" stroke="rgba(184,134,11,0.1)" strokeWidth="1"/>
        </pattern>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a120b"/>
          <stop offset="100%" stopColor="#3a2a16"/>
        </linearGradient>
      </defs>
      
      {/* Небо */}
      <rect width="500" height="350" fill="url(#skyGradient)"/>
      
      {/* Строящийся дом */}
      <g className={styles.svgBuilding}>
        {/* Фундамент */}
        <rect x="150" y="250" width="200" height="30" fill="#5a4a3a" stroke="#cbb376" strokeWidth="2"/>
        
        {/* Стены */}
        <rect x="170" y="180" width="160" height="70" fill="#7a6a5a" stroke="#f8d49e" strokeWidth="1.5"/>
        
        {/* Окна */}
        <rect x="185" y="190" width="30" height="25" fill="#1a120b" stroke="#cbb376" strokeWidth="1"/>
        <rect x="285" y="190" width="30" height="25" fill="#1a120b" stroke="#cbb376" strokeWidth="1"/>
        
        {/* Дверь */}
        <rect x="230" y="210" width="40" height="40" fill="#3a2a16" stroke="#b8860b" strokeWidth="1.5"/>
        
        {/* Крыша */}
        <polygon points="150,180 350,180 250,120" fill="#3a2a16" stroke="#f8d49e" strokeWidth="2"/>
        
        {/* Строительные элементы */}
        <rect x="130" y="220" width="20" height="30" fill="#5a4a3a" stroke="#cbb376" strokeWidth="1" className={styles.svgConstructionElement}/>
        <rect x="350" y="230" width="30" height="20" fill="#5a4a3a" stroke="#cbb376" strokeWidth="1" className={styles.svgConstructionElement}/>
      </g>
      
      {/* Строительная техника */}
      <g className={styles.svgCrane}>
        {/* Башня крана */}
        <rect x="400" y="150" width="15" height="150" fill="#5a5a5a" stroke="#cbb376" strokeWidth="1"/>
        
        {/* Стрела крана */}
        <rect x="150" y="150" width="250" height="8" fill="#6a6a6a" stroke="#f8d49e" strokeWidth="1" transform="rotate(-5 400 154)"/>
        
        {/* Груз */}
        <rect x="170" y="170" width="20" height="25" fill="#b8860b" stroke="#f8d49e" strokeWidth="1"/>
      </g>
      
      {/* Строители */}
      <g className={styles.svgWorkers}>
        {/* Строитель 1 */}
        <circle cx="200" cy="270" r="8" fill="none" stroke="#f8d49e" strokeWidth="1.5"/>
        <path d="M200 278L200 290M200 282L190 285M200 282L210 285" stroke="#f8d49e" strokeWidth="1.5" strokeLinecap="round"/>
        
        {/* Строитель 2 */}
        <circle cx="300" cy="280" r="8" fill="none" stroke="#cbb376" strokeWidth="1.5"/>
        <path d="M300 288L300 300M300 292L290 295M300 292L310 295" stroke="#cbb376" strokeWidth="1.5" strokeLinecap="round"/>
      </g>
      
      {/* Инструменты */}
      <g className={styles.svgTools}>
        <path d="M80 200L100 180" stroke="#f8d49e" strokeWidth="3" strokeLinecap="round"/>
        <path d="M70 230L90 210" stroke="#cbb376" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="50" cy="250" r="10" fill="none" stroke="#b8860b" strokeWidth="1.5"/>
      </g>
      
      {/* Материалы */}
      <g className={styles.svgMaterials}>
        <rect x="50" y="280" width="30" height="15" fill="#5a4a3a" stroke="#cbb376" strokeWidth="0.5"/>
        <rect x="90" y="275" width="25" height="20" fill="#7a6a5a" stroke="#cbb376" strokeWidth="0.5"/>
        <rect x="130" y="285" width="20" height="15" fill="#3a2a16" stroke="#cbb376" strokeWidth="0.5"/>
      </g>
    </svg>
      </div>
    );
  }