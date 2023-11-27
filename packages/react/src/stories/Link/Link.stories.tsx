import { Meta, Story } from '@storybook/react';
import { faEnvelope } from '@fortawesome/pro-regular-svg-icons/faEnvelope';
import { faPhone } from '@fortawesome/pro-regular-svg-icons/faPhone';
import { faExternalLink } from '@fortawesome/pro-regular-svg-icons/faExternalLink';
import { faChevronCircleRight } from '@fortawesome/pro-regular-svg-icons/faChevronCircleRight';
import { faStar } from '@fortawesome/pro-regular-svg-icons/faStar';
import Link, { LinkProps } from '../../components/Link';
import Typography from '../../components/Typography';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './LinkInfo';
import * as StoryTitle from '../StoryTitle';
import Container from '../../components/Container';

export default {
  title: 'React/Components/Link',
  component: Link,
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Link variant="paragraph1">This is a link</Link>
    </InfoTemplate>
  );
};

export const TypeVariants = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const element = document.getElementById('here');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <StoryTitle.Regular>Text with link together</StoryTitle.Regular>
      <>
        <Typography variant="paragraph1" display="inline">
          Paragraph text
        </Typography>
        <Container display="inline" ml="SpacingBase4">
          <Link variant="paragraph1" rightIcon={faStar} display="inline">
            and link together
          </Link>
        </Container>
      </>
      <Container my="SpacingBase4" />
      <StoryTitle.Regular>Email Link</StoryTitle.Regular>
      <Link
        href={'mailto:someone@newcrosshealthcare.com'}
        variant="paragraph1"
        leftIcon={faEnvelope}
      >
        contact me
      </Link>
      <Container my="SpacingBase4" />
      <StoryTitle.Regular>Phone Link</StoryTitle.Regular>
      <Link variant="paragraph1" href={'tel:6012345678'} leftIcon={faPhone}>
        6012345678
      </Link>

      <Container my="SpacingBase4" />
      <StoryTitle.Regular>External site Link</StoryTitle.Regular>
      <Link
        target={'_blank'}
        variant="paragraph1"
        href={'https://www.newcrosshealthcare.com/'}
        rightIcon={faExternalLink}
      >
        Go to external Website
      </Link>

      <Container my="SpacingBase4" />
      <StoryTitle.Regular>Internal site Link</StoryTitle.Regular>
      <Link
        variant="paragraph1"
        href={
          'https://www.halodesignsystem.com/?path=/story/react-components-link--interactive'
        }
        rightIcon={faChevronCircleRight}
      >
        Go to internal Website
      </Link>
      <Container my="SpacingBase4" />
      <StoryTitle.Regular>Section Link</StoryTitle.Regular>
      <Link variant="paragraph1" href="#here" onClick={handleClick}>
        Go below
      </Link>

      <Container my="SpacingBase4" />

      <Typography variant={'heading6'}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
        vitae nobis voluptates provident pariatur sequi quo tempore neque
        impedit sint quam deserunt possimus dolore quidem labore, praesentium
        deleniti quia nam itaque. Itaque aperiam soluta labore nulla, corporis
        tenetur! Architecto ipsam deserunt voluptates minima? Ipsam doloremque,
        debitis fugit praesentium eos ducimus commodi id at esse sapiente
        excepturi placeat nobis illo modi ipsum nam magnam? Laboriosam dolores
        provident iure illo voluptas atque magni veniam rerum consectetur culpa
        quae dolorem veritatis voluptatibus quod maiores doloribus, sed error
        fuga nam neque unde. Quam numquam unde placeat suscipit. Dolor pariatur
        doloremque error modi cum iure vitae laborum non minus quam fugit
        soluta, mollitia distinctio, optio aliquid quis perferendis
        exercitationem fuga repellendus ex. Nostrum officia deserunt odit
        similique neque repellat, odio cupiditate a debitis adipisci animi!
        Quibusdam aut eaque praesentium consequatur beatae natus rerum illo
        impedit voluptatum laudantium ea libero eveniet quisquam itaque
        provident debitis mollitia, numquam ipsa et nobis eos ducimus!
        Inventore, iure! Non ipsam sequi dicta, nobis illo deleniti laudantium
        nulla vitae veniam magni accusantium, fugiat voluptates qui! Veritatis
        eligendi alias cum exercitationem inventore suscipit ipsam possimus
        illum magnam laudantium ea dicta obcaecati corrupti, soluta voluptatum,
        distinctio fuga commodi explicabo tempore vitae. Eligendi error hic
        facilis iure eveniet, accusantium sapiente recusandae fuga perspiciatis
        laborum illo consequuntur id quos harum voluptatem eos necessitatibus
        fugiat. Unde enim dicta, temporibus suscipit iste incidunt illo ratione.
        Sint fugiat nisi suscipit eaque consequatur aut, repudiandae a eos hic
        reiciendis neque nam quod tempora nesciunt maxime iste consequuntur qui
        consectetur vitae deserunt aperiam inventore magnam illo ducimus! Unde
        voluptas nisi quidem molestiae, provident, magni rem sit delectus qui
        est aliquid tempore animi porro fugit laudantium aut iste error cum
        consectetur? Excepturi, repellat veritatis! Tempore saepe praesentium,
        cum illum explicabo voluptatibus veniam perferendis, earum perspiciatis
        deleniti maiores mollitia quidem possimus, aliquid dolorem iure
        distinctio laborum voluptate reprehenderit nemo vitae incidunt placeat
        quos! Accusamus, reiciendis eligendi. Error asperiores blanditiis
        commodi et quidem laboriosam pariatur corporis eaque repellat molestiae.
        Deserunt laudantium natus eveniet eos error quam molestiae id cumque
        inventore placeat nulla, delectus nobis corrupti nemo unde voluptatem
        atque blanditiis minima rem obcaecati dignissimos vel accusamus?
        Asperiores, dolore? Unde assumenda magnam ullam fuga. Voluptatibus rerum
        vero dolore nostrum commodi numquam velit dolor voluptate provident
        exercitationem qui quas quis explicabo harum voluptatem nihil pariatur
        rem voluptatum, ducimus labore animi. Nesciunt obcaecati illo velit
        consectetur voluptatem repellat quis iusto alias sint. Iure, totam iste
        laborum voluptate quas voluptatibus ad reprehenderit libero dicta
        tempora expedita. Quae, obcaecati quia laboriosam ea doloremque commodi
        accusamus suscipit, asperiores blanditiis cum nostrum cupiditate
        corporis recusandae officiis eaque inventore similique, praesentium eius
        aliquam. Eius, quo! Temporibus, vero vel deleniti illo et corrupti!
        Doloribus harum magni sapiente voluptatem dolor officiis quam at sed,
        voluptates error dolores. Facere, minus! Quasi veniam quam iusto qui,
        nihil vitae alias in voluptas libero ipsam inventore atque sunt itaque
        quaerat nulla obcaecati accusamus doloribus nemo debitis. Autem sit est
        commodi esse, fugiat vitae eveniet neque optio eligendi veritatis sint
        soluta in repellendus enim dolor quia tempore omnis totam consequuntur
        perferendis deserunt repudiandae ullam. Quod reiciendis cupiditate non
        vel fuga nostrum ipsam modi possimus molestiae magni in itaque
        exercitationem quam accusamus architecto voluptates, ut similique? Omnis
        quod saepe illo libero consectetur tempora ratione error, quo culpa sit
        corporis ullam sint, possimus incidunt vel! Ratione numquam quod
        expedita voluptatem fugit commodi sequi quasi id veritatis consequatur
        odit et minus soluta eum error aliquid sit libero necessitatibus,
        molestias ipsum! Sit nulla at itaque, aliquam cum id in mollitia,
        tenetur eaque, molestias esse et a laboriosam modi assumenda ducimus
        nemo explicabo debitis nesciunt nam! In delectus nisi illum debitis
        repellat laborum nostrum sed magnam possimus rerum nulla, eaque hic
        maxime corporis ipsam aut, quos numquam officiis! Vel recusandae atque
        vitae cumque aut numquam, sit doloribus hic molestias! Voluptatem,
        similique beatae asperiores hic tenetur ea molestias optio quaerat ad
        cumque debitis molestiae possimus laboriosam dolor tempore quisquam,
        quas veniam animi illum sed, aliquam praesentium? Fugit doloribus
        recusandae voluptatibus maiores sequi aut eveniet quas asperiores nulla
        ipsam hic voluptatem, aperiam reprehenderit! Quaerat necessitatibus
        vitae asperiores qui, iusto similique, temporibus labore ad quia maiores
        at cumque enim perspiciatis facilis voluptatibus quibusdam? Similique
        ipsa provident pariatur accusamus dolor soluta voluptatibus laudantium
        odit aliquid blanditiis ipsum eum maxime distinctio enim reiciendis
        mollitia aspernatur, quidem sit necessitatibus unde, animi error numquam
        voluptatem? Illo delectus sapiente, veniam deleniti autem quidem dolor
        animi nesciunt eligendi doloribus. Animi id nostrum accusantium iusto
        accusamus explicabo, repellendus repellat pariatur aut ipsam tenetur
        ratione voluptate, molestiae deserunt ea, error quidem. Molestiae iste
        magni nesciunt mollitia laboriosam est maiores deserunt optio modi
        architecto reiciendis laudantium adipisci, harum nulla exercitationem
        perferendis quidem sequi voluptatum sed sapiente? Quidem, officia
        aliquam repellendus temporibus laboriosam libero sequi praesentium
        inventore corporis labore. At officiis, obcaecati voluptatem delectus
        consequatur veritatis ut dolore tenetur repellendus pariatur sapiente
        ipsam saepe quos, deleniti reprehenderit optio minus temporibus animi,
        ipsa architecto ipsum. Quasi repudiandae magni ad beatae explicabo
        dolorem, quae quidem eos officia sit facere voluptates necessitatibus.
        Tempore veritatis hic rerum porro temporibus minima? Soluta, natus.
        Dolores id aut corrupti! Provident minima quibusdam, dolore ex,
        distinctio nostrum autem eos inventore porro, totam nemo. Reiciendis a
        repellat explicabo delectus possimus quis nisi maxime, voluptates id
        tempora saepe quo odit accusantium quos eum quidem ad autem nulla.
        Impedit enim consequuntur ipsa incidunt laboriosam beatae fugit minima
        et, tenetur nulla quos alias adipisci veritatis sed? Harum dicta rerum,
        accusantium, eaque sequi quam temporibus voluptatum consectetur
        explicabo, quos mollitia amet est aspernatur delectus adipisci? Fugit
        quas consequuntur repellat deserunt accusantium facere nisi, harum
        quasi, labore nihil dolorum facilis, libero itaque placeat cum
        asperiores enim consequatur sint sequi ad ratione numquam animi
        voluptates nulla. Reiciendis repudiandae quae neque, laudantium quam
        accusamus fugiat illo ad soluta officia. Iste, consequuntur! Numquam
        dolor consequatur qui minima dolores, voluptas libero, ipsum harum
        aspernatur nulla pariatur? Exercitationem numquam quaerat omnis
        adipisci. Odio magni nobis ex, perspiciatis facilis veritatis quisquam
        dignissimos fugiat pariatur ad incidunt necessitatibus labore quo
        consectetur dolorum minima. Magni omnis sit minima pariatur, fugiat
        perspiciatis expedita eius unde earum reprehenderit ab voluptatum!
      </Typography>
      <Typography id={'here'} variant={'heading3'}>
        Welcome
      </Typography>
    </>
  );
};

const Template: Story<LinkProps> = ({ children, ...rest }) => (
  <Link {...rest}>{children}</Link>
);

export const Interactive = Template.bind({});
Interactive.args = {
  testID: 'interactive-link',
  children: 'This is a link',
  variant: 'paragraph1',
  leftIcon: faEnvelope,
};
