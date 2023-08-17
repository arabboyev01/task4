import { TableContainer } from '@/components/ManagmentTable/styles.table'
import {
    ToolbarContainer,
    ToolbarActions,
    BlockButton,
    UnBlockButton,
    Delete
} from '@/components/Buttons/style.buttons'
import React from 'react'
import { TableButtons } from '@/types'

const DumbButtons: React.FC<TableButtons> = ({handleBlockClick, handleUnblockClick, handleDeleteClick}) => (
    <TableContainer>
      <ToolbarContainer>
        <ToolbarActions>
          <BlockButton onClick={handleBlockClick}>Block</BlockButton>
          <UnBlockButton onClick={handleUnblockClick}>Unblock</UnBlockButton>
          <Delete onClick={handleDeleteClick}>Delete</Delete>
        </ToolbarActions>
      </ToolbarContainer>
    </TableContainer>
)

export default DumbButtons