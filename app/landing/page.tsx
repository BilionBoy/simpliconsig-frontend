"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  FileText,
  Building2,
  Bot,
  MessageCircle,
  CheckCircle2,
  Shield,
  Zap,
  Sparkles,
  Star,
  TrendingUp,
  ArrowRight,
  Clock,
  Target,
  BarChart3,
  UserCheck,
  FileCheck,
  Settings,
} from "lucide-react";

export default function LandingPage() {
  const whatsappNumber = "5569993881869";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá! Gostaria de conhecer o SIMPLICONSIG e entender como pode ajudar minha empresa."
  )}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center justify-center shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                <div className="relative flex flex-col items-center justify-center">
                  <span className="text-white font-black text-xs leading-none"></span>
                  <div className="w-4 h-0.5 bg-white/80 mt-0.5 rounded-full" />
                </div>
              </div>
            </div>
            <div>
              <span className="font-black text-xl tracking-tight bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                SIMPLICONSIG
              </span>
              <div className="text-[10px] text-muted-foreground font-semibold -mt-1">
                Gestão Inteligente
              </div>
            </div>
          </div>
          {/* </CHANGE> */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#modules"
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              Módulos
            </Link>
            <Link
              href="#recursos"
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              Recursos
            </Link>
            <Link
              href="#contato"
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              Contato
            </Link>
          </div>
          <Button size="sm" className="font-bold" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contato
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <Badge className="mb-6 bg-blue-600/10 text-blue-700 border-blue-600/20 px-4 py-1.5">
                <Sparkles className="w-4 h-4 mr-2" />
                Plataforma completa de consignado
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-balance tracking-tighter leading-none">
                Gestão inteligente de{" "}
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                  crédito consignado
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance leading-relaxed font-medium">
                Gerencie clientes, contratos, empresas, emissão de relatórios e
                metas para sua empresa.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  className="text-base font-black h-14 px-10 shadow-xl group"
                  asChild
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Fale com especialista
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
              <p className="mt-8 text-sm text-muted-foreground">
                Resposta em minutos • Sem compromisso • Consultoria gratuita
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-blue-900 bg-blue-900">
                <img
                  src="/images/captura-20de-20ecr-c3-a3-20de-202025-11-21-2018-36-38.png"
                  alt="SIMPLICONSIG Dashboard"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-full blur-3xl" />
            </div>
            {/* </CHANGE> */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-950/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                850+
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-semibold">
                Empresas ativas
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                90%
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-semibold">
                Redução de tempo
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                +30
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-semibold">
                Bancos integrados
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-semibold">
                Uptime garantido
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section - Inspired by Livecred */}
      <section id="modules" className="py-24 md:py-36">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-blue-600/10 text-blue-700 border-blue-600/20">
              Módulos
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-balance tracking-tight">
              CRM Completo para sua empresa de Crédito Consignado
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              Gestão inteligente de usuários, clientes, empresas, contratos,
              metas e relatórios
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-24">
            <Card className="p-12 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background border-2">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <Badge className="mb-4 bg-blue-600/10 text-blue-700 border-blue-600/20">
                    Dashboard em Tempo Real
                  </Badge>
                  <h3 className="text-3xl font-black mb-4">
                    Acompanhe tudo em tempo real
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Dashboard completo com métricas essenciais: total de
                    clientes, metas alcançadas, contratos pendentes e comissões
                    do mês. Tudo atualizado em tempo real.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Métricas visuais com indicadores de crescimento
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Contratos recentes com status coloridos
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Alertas inteligentes para ações pendentes
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-900">
                    <img
                      src="/images/captura-20de-20ecr-c3-a3-20de-202025-11-21-2018-36-38.png"
                      alt="Dashboard SIMPLICONSIG"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* </CHANGE> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="p-8 hover:shadow-xl transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <UserCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2">Usuários</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Controle completo de usuários e permissões. Gerencie sua equipe
                com níveis de acesso personalizados para cada módulo do sistema.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2">Clientes</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Cadastro completo com dados pessoais, documentos, histórico de
                propostas e status de contratos. Formulário em etapas para
                facilitar o processo.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2">Empresas</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Gestão de empresas conveniadas com validação automática de CNPJ,
                endereço completo e informações de contato. Pesquisa rápida e
                organizada.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FileCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2">Contratos</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Tabela completa com cliente, valor, parcelas, status e data.
                Status coloridos (Aprovado, Pendente, Em Análise) para
                visualização rápida.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2">Metas</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Cards visuais mostrando percentual de metas alcançadas com
                indicadores de crescimento. Acompanhe o desempenho individual e
                da equipe.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2">Relatórios</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Relatórios completos e personalizáveis com exportação em Excel,
                PDF. Visualize comissões, produção e performance da equipe.
              </p>
            </Card>
          </div>
          {/* </CHANGE> */}

          <div className="max-w-5xl mx-auto mb-16">
            <Card className="p-12 bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-background border-2">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 md:order-1">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/captura-20de-20ecr-c3-a3-20de-202025-11-21-2018-36-51.png"
                      alt="Cadastro de Clientes"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Badge className="mb-4 bg-green-600/10 text-green-700 border-green-600/20">
                    Cadastro Inteligente
                  </Badge>
                  <h3 className="text-3xl font-black mb-4">
                    Formulário completo de clientes
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Sistema de cadastro em 3 etapas: Dados Cadastrais, Dados
                    Funcionais e Documentos. Interface limpa e intuitiva que
                    guia o usuário pelo processo completo.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Validação de CPF e dados em tempo real
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Busca automática de endereço por CEP
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Upload de documentos com preview
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
          {/* </CHANGE> */}

          <div className="max-w-5xl mx-auto">
            <Card className="p-12 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-background border-2">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-purple-600/10 text-purple-700 border-purple-600/20">
                    Gestão de Empresas
                  </Badge>
                  <h3 className="text-3xl font-black mb-4">
                    Empresas conveniadas organizadas
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Tabela completa com razão social, nome fantasia, CNPJ,
                    endereço completo, telefone e cidade. Sistema de pesquisa e
                    paginação para facilitar a navegação.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Consulta automática de CNPJ na Receita Federal
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Ações rápidas para editar e gerenciar
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Exportação de relatórios de empresas
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/image.png"
                      alt="Gestão de Empresas"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* </CHANGE> */}
        </div>
      </section>

      {/* Features Showcase Section - Inspired by Livecred */}
      <section
        id="recursos"
        className="py-24 md:py-36 bg-blue-50 dark:bg-blue-950/10"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-24">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Controle Financeiro
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                Controle de Propostas, Tabelas e Comissões
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                O SIMPLICONSIG também ajuda a organizar a administração da sua
                empresa de crédito consignado. Com o controle financeiro, você
                acompanha suas comissões pagas pelo banco e gerencia de forma
                ágil e segura suas receitas.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">
                      Contas a Pagar / Contas a Receber
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Acompanhe suas comissões pagas pelo banco, percentual e
                      datas, gerenciando de forma ágil suas receitas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">
                      Bancos, Convênios, Tabelas e Comissões
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Mobilidade total para atuar como sua empresa trabalha.
                      Seja diretamente com Bancos ou com correspondentes
                      bancários parceiros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/image.png"
                alt="Controle Financeiro"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <img
                src="/images/image.png"
                alt="Recursos da Plataforma"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Recursos Poderosos
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                Software Para Crédito Consignado
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                O SIMPLICONSIG é um sistema para crédito consignado desenvolvido
                exclusivamente para utilização de Correspondentes Bancários. Com
                uma interface dinâmica, intuitiva e um design moderno, faz deste
                sistema o mais completo do mercado.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-background rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-1">Produção</h4>
                  <p className="text-xs text-muted-foreground">
                    Monitore atividades através do CRM
                  </p>
                </div>
                <div className="text-center p-6 bg-background rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-1">Segurança</h4>
                  <p className="text-xs text-muted-foreground">
                    Redução de risco de perda de dados
                  </p>
                </div>
                <div className="text-center p-6 bg-background rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-1">On-line 24 horas</h4>
                  <p className="text-xs text-muted-foreground">
                    Relatórios para tomada de decisões
                  </p>
                </div>
                <div className="text-center p-6 bg-background rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-1">Produtividade</h4>
                  <p className="text-xs text-muted-foreground">
                    Módulos simples e fáceis de operar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="py-24 md:py-36">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              RPA e Automação
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-balance tracking-tight">
              Automação que economiza 90% do seu tempo
            </h2>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Robôs inteligentes trabalham 24/7 automatizando tarefas
              repetitivas enquanto sua equipe foca no que realmente importa:
              vendas e atendimento ao cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-6">
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-black mb-3">Consultas Automáticas</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Robôs consultam automaticamente todos os bancos integrados em
                segundos, eliminando processos manuais.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-black mb-3">Processamento em Lote</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Processe centenas de contratos simultaneamente com validação
                automática de documentos e dados.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-black mb-3">
                Inteligência Artificial
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                IA analisa padrões e sugere melhores produtos para cada cliente,
                aumentando taxa de conversão.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-blue-50 dark:bg-blue-950/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Depoimentos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 font-medium leading-relaxed">
                "Aumentamos nossa produtividade em 300% no primeiro mês. O RPA
                sozinho economizou 20h/semana da nossa equipe."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-black">
                  MC
                </div>
                <div>
                  <div className="font-bold">Marcos Castro</div>
                  <div className="text-sm text-muted-foreground">
                    CEO, FinConsig
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 font-medium leading-relaxed">
                "A integração com os bancos é impecável. Reduzimos erros em 95%
                e o tempo de processamento caiu pela metade."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-primary-foreground font-black">
                  AS
                </div>
                <div>
                  <div className="font-bold">Ana Silva</div>
                  <div className="text-sm text-muted-foreground">
                    Diretora, Crédito Fácil
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 font-medium leading-relaxed">
                "ROI em menos de 2 meses. O suporte é excepcional e a plataforma
                não trava nunca. Indispensável!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-black">
                  RL
                </div>
                <div>
                  <div className="font-bold">Ricardo Lima</div>
                  <div className="text-sm text-muted-foreground">
                    Gerente, Banco Parceiro
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative">
          <Card className="p-12 md:p-20 text-center bg-transparent border-0 shadow-none text-primary-foreground">
            <Badge className="mb-6 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 px-4 py-1.5">
              <TrendingUp className="w-4 h-4 mr-2" />
              Sem compromisso
            </Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-balance tracking-tight drop-shadow-lg">
              Pronto para revolucionar sua gestão?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-primary-foreground/95 text-balance max-w-3xl mx-auto leading-relaxed font-medium">
              Fale com nosso especialista e descubra como o SIMPLICONSIG pode
              transformar sua operação de crédito consignado
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-base font-black h-16 px-12 shadow-2xl text-lg group"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Falar com especialista agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="mt-6 text-primary-foreground/90">
              WhatsApp: (69) 99388-1869 • Resposta imediata • Consultoria
              gratuita
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                  <div className="relative flex flex-col items-center justify-center">
                    <span className="text-white font-black text-xs leading-none">
                      S
                    </span>
                    <div className="w-3 h-0.5 bg-white/80 mt-0.5 rounded-full" />
                  </div>
                </div>
                <span className="font-black text-lg">SIMPLICONSIG</span>
              </div>
              {/* </CHANGE> */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                Plataforma completa de gestão para crédito consignado com RPA e
                automação inteligente.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Módulos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>CRM e Clientes</li>
                <li>Gestão de Contratos</li>
                <li>Empresas Conveniadas</li>
                <li>Integração Bancária</li>
                <li>RPA e Automação</li>
                <li>Analytics e Relatórios</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>App Mobile</li>
                <li>Inteligência Artificial</li>
                <li>Assinatura Digital</li>
                <li>Portal do Cliente</li>
                <li>API Completa</li>
                <li>White Label</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>WhatsApp: (69) 99388-1869</li>
                <li>Horário: Seg-Sex 8h-18h</li>
                <li>Resposta em minutos</li>
              </ul>
              <Button className="mt-4 w-full font-bold" size="sm" asChild>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar agora
                </a>
              </Button>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2025 SIMPLICONSIG. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
