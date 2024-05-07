// 'use client'

// import React from "react";
// import Image from "next/image";
// import classes from './teamCard.module.css';
// import { TEAM, TEAM_TEXT } from '../../utils/constants';
// import Icon from "../Icon/Icon";
// import Link from "next/link";

// interface Props {
//   imageName: string,
//   position: string,
//   name: string,
//   description: string,
//   url: string
// }

// const TeamCard = ({ imageName, position, name, description, url }: Props): JSX.Element => {
//   return (
//     <div className={classes.teamCard}>
//       <div className={classes.group}>
//         <Image
//           className={classes.image}
//           alt={`${name}`.toLowerCase() + " icon"}
//           src={`/icons/Team/${imageName}.png`}
//           width={288}
//           height={241}
//         />
//         <div className={classes.cardText}>
//           <div className={classes.position}>{position}</div>
//           <div className={classes.name}>{name}</div>
//           <div className={classes.description}>{description}</div>
//         </div>
//         <div className={classes.icon}>
//           <Link href={url} target="_blank" rel="noopener noreferrer">
//             <Icon name="linkedinBlue" size={23} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// const TeamCards = (): JSX.Element => {
//   return (
//     <>
//       <section className={classes.text}>
//         <h1>{TEAM_TEXT['english'][0]}</h1>
//         <p>{TEAM_TEXT['english'][1]}<br></br><br></br>{TEAM_TEXT['english'][2]}</p>
//       </section>
//       <ul className={classes.teamCards}>
//       {Object.keys(TEAM).map((key) => {
//         const [imageName, position, name, description, url] = TEAM[key];
//         return (
//         <li key={key}>
//           <TeamCard imageName={imageName} position={position} name={name} description={description} url={url} />
//         </li>
//         );
//       })}
//       </ul>
//     </>
//   )
// };

// export default TeamCards;
