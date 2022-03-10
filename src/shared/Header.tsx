import 'twin.macro'

import { ArrowDown } from 'phosphor-react'
import { Button } from './Button'
import { ReactComponent as CurrEth } from '../assets/images/currencyEthereum.svg'
import { ReactComponent as LogoDark } from '../assets/images/logoDark.svg'
import { ReactComponent as LogoLight } from '../assets/images/logoLight.svg'
import { NavigationMenu } from './NavigationMenu'
import { ThemeSwitch } from './ThemeSwitch'
import { WalletIndicator } from './WalletIndicator'
import { WalletModal } from './WalletModal'
import tw from 'twin.macro'
import { useIsConnected } from './hooks/useIsConnected'
import { useState } from 'react'
import { useTheme } from '../state/hooks'

/** @jsxImportSource @emotion/react */

export const Header = () => {
  const theme = useTheme()
  const isConnected = useIsConnected()
  const [isOpenWallet, setIsOpenWallet] = useState(false)

  return (
    <div tw='max-w-1920 w-[calc(100% - 9rem)] my-6 mx-auto flex flex-row items-start justify-between'>
      <span tw='flex flex-row items-start'>
        {theme ? (
          <LogoDark css={[tw`w-32 h-8`]} />
        ) : (
          <LogoLight css={[tw`w-32 h-8`]} />
        )}
        <span tw='mt-1 ml-24 flex flex-row'>
          <NavigationMenu />
          <ThemeSwitch />
        </span>
      </span>
      <span tw='flex flex-row items-center gap-2'>
        <Button text='Ethereum' leftIcon={CurrEth} rightIcon={ArrowDown} />

        {isConnected ? (
          <WalletIndicator />
        ) : (
          <Button
            // text={connected ? 'Disconnect' : `Connect wallet`}
            text='Connect'
            action
            onClick={() => setIsOpenWallet(true)}
          />
        )}
      </span>
      <WalletModal
        modalIsOpen={isOpenWallet}
        onClose={() => setIsOpenWallet(false)}
      />
    </div>
  )
}
