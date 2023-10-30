import { Button, buttonVariants } from "@/components/ui/button";
import H1 from "@/components/H1";
import { Icons } from "@/components/Icons";
import Paragraph from "@/components/Paragraph";

const page = () => {
  return (
    <section className="container flex max-w-[64rem] flex-1 flex-col">
      <div className="flex flex-col items-center py-20">
        <Icons.logo className="h-28 w-28 fill-[#13529C] text-center" />
        <H1>Radiologia com IA</H1>
        <div className="mt-6 flex flex-col gap-4 lg:mt-0">
          <Paragraph className="text-muted-foreground">
            Nosso objetivo com a plataforma{" "}
            <strong className="font-bold">Sihat</strong> é utilizar a inovação
            tecnológica para aprimorar a assistência médica. Treinar modelos em
            conjuntos de dados diversos, abrangendo várias condições médicas e
            modalidades de imagens.
          </Paragraph>
          <Paragraph className="text-muted-foreground">
            Algoritmos de segmentação têm aprimorado o diagnóstico de tumores
            cerebrais. Esses algoritmos destacam áreas importantes em imagens
            médicas, auxiliando profissionais a identificar com precisão o
            tamanho, forma e localização do tumor, o que é essencial para o
            diagnóstico e planejamento do tratamento.
          </Paragraph>
          <Paragraph className="text-muted-foreground">
            Nosso foco principal está voltado, inicialmente, para o diagnóstico
            e tratamento de tumores cerebrais. Reconhecemos a importância de
            aprimorar a precisão nessa área crítica da medicina, uma vez que os
            tumores cerebrais apresentam desafios únicos devido à sua complexa
            localização e impacto direto no sistema nervoso central. Ao
            desenvolver e aplicar tecnologias avançadas, como algoritmos de
            segmentação, buscamos garantir que os pacientes com tumores
            cerebrais recebam diagnósticos mais precisos e planos de tratamento
            mais eficazes, melhorando assim a qualidade de vida e as
            perspectivas de recuperação para aqueles que enfrentam essa condição
            médica desafiadora.
          </Paragraph>
          <Paragraph className="text-muted-foreground">
            No momento, a plataforma Sihat está em desenvolvimento.
          </Paragraph>
          <div className="flex flex-col gap-4">
            <Paragraph className="text-muted-foreground">
              Atuais participantes do projeto:
            </Paragraph>
            <div className="flex flex-wrap gap-4 [&>*]:flex [&>*]:flex-1 [&>*]:justify-between">
              <a
                href="https://www.linkedin.com/in/kewyn-torres-75a859239/"
                target="_blank"
                className={buttonVariants({ variant: "outline" })}
              >
                Kewyn Torres
                <Icons.linkedin className="ml-2" />
              </a>
              <a
                href="https://www.instagram.com/luzeslima/"
                target="_blank"
                className={buttonVariants({ variant: "outline" })}
              >
                Luiz Lima
                <Icons.instagram className="ml-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/rafael-lima-a035b7253/"
                target="_blank"
                className={buttonVariants({ variant: "outline" })}
              >
                Rafael Lima
                <Icons.linkedin className="ml-2" />
              </a>
              <Button variant="outline">Rodrigo Dias</Button>
              <a
                href="https://www.linkedin.com/in/yuirsilva/"
                target="_blank"
                className={buttonVariants({ variant: "outline" })}
              >
                Yuri Silva
                <Icons.linkedin className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
