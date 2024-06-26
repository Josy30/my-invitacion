import "./Gifts.scss";
import GiftsIcon from "./GiftsxIcon";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Gifts = ({ gifts }) => {
	const control = useAnimation();
	const [ref, inView] = useInView();
	const boxVariant = {
		visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
		hidden: { opacity: 0 },
	};

	useEffect(() => {
		if (inView) {
			control.start("visible");
		}
	});
	return (
		<div className="gifts-component">
			<motion.div
				ref={ref}
				animate={control}
				variants={boxVariant}
				initial={{ opacity: 0, y: "100%" }}>
				{gifts ? (
					<div className="gifts-container">
						<div>
							<GiftsIcon />
						</div>
						<div>
							<h1 className="gifts-header">¡Lluvia de sobres!</h1>
							<p className="gifts-text">
								"La lluvia de sobres es la tradicion de regalar dinero en
								efectivo a los novios en un sobre el día del evento"
							</p>
						</div>
						<div className="transfer-container">
							<h1 className="gifts-header-transferencia">Transferencia</h1>
							<p className="gifts-text">
								"No es necesario estar cerca, para hacer sentir el amor y el
								cariño"
								<br />
								Si asi lo prefieres puedes realizar transferencia bancaria o por
								e-transfer
							</p>
							<span className="gifts-Span-header">Transferencia bancaria</span>
							<span className="gifts-Span">Nombre: Joselyn Judith</span>
							<span className="gifts-Span">Banco: BBVA</span>
							<span className="gifts-Span">0000-0000-0000</span>
							<span className="gifts-Span-header">E-transfer</span>
							<span className="gifts-Span">Nombre: Arseni Dmitriev</span>
							<span className="gifts-Span">
								Correo electrónico: 195limitless@gmail.com
							</span>
							<span className="gifts-Span">Mobile: 514-560-0334</span>
							<span className="gifts-Span">Gracias</span>
							<p className="gifts-text">
								Por tu muestro de cariño y espero verte en este dia tan especial
							</p>
						</div>
					</div>
				) : (
					<div className="gifts-container-socials ">
						<div>
							<p className="gifts-text">
								Comparte con nosotros todas tus fotografías del evento, usando
								el siguiente #hashtag en todas tus publicaciones de Facebook e
								Instagram.
							</p>
							<h1 className="gifts-header">#BodaJoselyn&Arseni</h1>
						</div>
					</div>
				)}
			</motion.div>
		</div>
	);
};

export default Gifts;
