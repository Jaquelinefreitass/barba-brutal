'use client'

import NossosClientes from '@/components/cliente/NossosClientes'
import TituloSlogan from '@/components/landing/TituloSlogan'
import NossosProfissionais from '@/components/profissional/NossosProfissionais'
import NossosServicos from '@/components/servico/NossosServicos'
import ContainerComBackground from '@/components/shared/ConteinerComBackground'

export default function Landing() {
    return (
        <div>
            <TituloSlogan />
            <ContainerComBackground imagem="/banners/servicos.webp">
                <NossosServicos />
                <NossosProfissionais />
            </ContainerComBackground>
            <ContainerComBackground imagem="/banners/servicos.webp">
                <NossosClientes />
            </ContainerComBackground>
        </div>
    )
}
