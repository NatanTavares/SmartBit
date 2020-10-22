import React from 'react';
import HeaderSection from '../../HeaderSection/HeaderSection';
import Card from '../../Card/Card';

import Shape1 from '../../../assets/icons/shape-1.svg';
import Shape2 from '../../../assets/icons/shape-2.svg';
import Shape3 from '../../../assets/icons/shape-3.svg';
import Shape4 from '../../../assets/icons/shape-4.svg';
import Shape5 from '../../../assets/icons/shape-5.svg';
import Shape7 from '../../../assets/icons/shape-7.svg';

import './styles.css';

function Services() {
  
  return (
    <section className="services-section">
      <HeaderSection
        title="Serviços"
        content="Inovação e transformação digital para empresas e empreendedores"
      />
      <div className="cards-zone">
        <div className="grid-cards-zone">
          <Card
            title="Sites"
            description="Landing Pages, Sites Institucionais,  Dashboards e Marketplaces"
            shape={Shape1}
          />
          <Card
            title="Apps"
            description="Aplicativos para iOS e Android utilizando tecnologias hibridas"
            shape={Shape2}
          />
          <Card
            title="Sistemas"
            description="Desenvolvemos Softwares, Sistemas Web e Apps integrados"
            shape={Shape3}
          />
          <Card
            title="SEO"
            description="Técnicas avançadas para potencializar e melhorar o posicionamento do seu negócio em sites de busca"
            shape={Shape4}
          />
          <Card
            title="DevOps"
            description="Cuidamos de toda parte da infraestrutura ágil de sua empresa, modernizando seus processos"
            shape={Shape5}
          />
          <Card
            title="MVP"
            description="Estruturamos a ideia com você e desenvolvemos o produto funcional para mercado"
            shape={Shape7}
          />
        </div>
      </div>
    </section>
  );
}

export default Services;