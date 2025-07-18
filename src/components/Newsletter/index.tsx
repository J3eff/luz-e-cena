import Button from "../Button";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import styles from "./Newslatter.module.css";

const Newslatter = () => {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.titulo}>Inscreva-se para ganhar descontos!</h2>
      <form className={styles.form}>
        <Fieldset>
          <InputText placeholder="Digite o seu melhor email" />
        </Fieldset>
        <Button type="submit" variant="default">
          Inscrever-se
        </Button>
      </form>
    </section>
  );
};

export default Newslatter;
