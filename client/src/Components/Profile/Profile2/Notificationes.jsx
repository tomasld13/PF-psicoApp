import { FormControl, FormLabel, Switch } from '@chakra-ui/react'

function Notificationes() {
  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <FormLabel
        htmlFor="notificationEmails"
        mb={0}
        cursor="pointer"
        userSelect="none"
      >
        Recibir notificaciones al email
      </FormLabel>
      <Switch id="notificationEmails" />
    </FormControl>
  )
}

export default Notificationes