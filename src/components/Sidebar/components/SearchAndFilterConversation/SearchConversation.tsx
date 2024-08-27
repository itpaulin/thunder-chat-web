import { alpha, InputBase, styled } from '@mui/material'
import { SearchIcon } from 'lucide-react'

const SearchConversation = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon style={{ color: 'white', width: 20 }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}

export default SearchConversation

const Search = styled('div')(({ theme }) => ({
  height: 40,
  width: '100%',
  maxWidth: '500px', // Largura máxima para controlar o tamanho do input
  position: 'relative',
  borderRadius: '25px', // Bordas bem arredondadas
  backgroundColor: '#3a3a3a', // Fundo escuro
  border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`, // Borda levemente visível
  boxShadow: `
    inset 0 1px 0px ${alpha(theme.palette.common.black, 0.5)},
    inset 0 0px 2px ${alpha(theme.palette.common.black, 0.4)},
    0 1px 0 0.4px ${alpha(theme.palette.common.white, 0.4)}

  `, // Sombras internas para criar profundidade
  // '&:hover': {
  //   backgroundColor: '#4a4a4a', // Tom mais claro ao passar o mouse
  // },
  [theme.breakpoints.up('sm')]: {
    width: '100%',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1.2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  width: '100%',
  height: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  borderRadius: 'inherit', // Segue a mesma borda do pai
}))
