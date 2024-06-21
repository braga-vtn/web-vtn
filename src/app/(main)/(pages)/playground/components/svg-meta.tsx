import React from 'react';

interface SvgMetaProps {
  width?: string;
  height?: string;
  fill?: string;
}

const SvgMeta: React.FC<SvgMetaProps> = (props) => {
  const { width = "1.2rem", height = "1.2rem", fill = "currentColor" } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M16.023 4.503c1.83-.126 3.244.942 4.185 2.174c.948 1.243 1.601 2.866 1.96 4.462c.357 1.596.453 3.311.156 4.773c-.285 1.404-1.046 3.01-2.767 3.525c-1.62.484-3.04-.22-4.052-1.072c-1.016-.855-1.876-2.053-2.552-3.176a25.298 25.298 0 0 1-.89-1.616a25.35 25.35 0 0 1-.889 1.615c-.676 1.124-1.536 2.322-2.552 3.177c-1.013.852-2.432 1.556-4.052 1.072c-1.721-.515-2.482-2.12-2.767-3.525c-.296-1.462-.2-3.177.157-4.773c.358-1.596 1.011-3.22 1.96-4.462c.94-1.232 2.354-2.3 4.184-2.174c1.716.12 2.963 1.283 3.74 2.269l.22.289l.219-.29c.777-.985 2.024-2.149 3.74-2.268M7.896 7.496c-.42-.029-.97.186-1.592 1.002c-.614.805-1.124 1.993-1.417 3.298c-.292 1.305-.335 2.579-.144 3.52c.165.81.43 1.101.592 1.203l.068.034l.027.01c.232.07.614.05 1.26-.494c.645-.542 1.303-1.413 1.914-2.427c.272-.453.525-.917.752-1.363l.26-.525l.233-.497l.206-.458l.175-.407l.143-.346a8.923 8.923 0 0 0-.663-1.119c-.644-.916-1.29-1.394-1.814-1.43Zm8.335 0c-.524.037-1.17.515-1.814 1.431a8.918 8.918 0 0 0-.663 1.119l.227.543l.19.434l.107.234l.234.497l.26.525c.227.446.479.91.751 1.363c.611 1.014 1.27 1.885 1.913 2.427c.601.506.973.558 1.21.507l.052-.013c.13-.04.483-.249.686-1.248c.19-.94.149-2.214-.144-3.52c-.292-1.304-.802-2.492-1.417-3.297c-.623-.816-1.172-1.03-1.592-1.002"/></g></svg>
  );
}

export default SvgMeta;